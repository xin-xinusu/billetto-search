import { NextResponse } from "next/server";

// In-memory cache
const cache = new Map<string, { data: any; expiry: number }>();

// Cache TTL in milliseconds (e.g., 5 minutes)
const CACHE_TTL = 5 * 60 * 1000;

async function fetchWithCache(url: string, options: RequestInit) {
  const cached = cache.get(url);

  // Return cached response if valid
  if (cached && Date.now() < cached.expiry) {
    console.log(`Cache hit for ${url}`);
    return cached.data;
  }

  console.log(`Cache miss for ${url}`);
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${url}, Status: ${response.statusText}`);
  }

  const data = await response.json();

  // Cache the response
  cache.set(url, { data, expiry: Date.now() + CACHE_TTL });

  return data;
}

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: "Event ID is required" }, { status: 400 });
  }

  try {
    const apiKey = process.env.BILLETTO_KEY_PAIR as string;

    // Fetch event data first
    const eventUrl = `${process.env.BILLETTO_API_URL}/${id}`;
    const eventData = await fetchWithCache(eventUrl, {
      headers: { "Api-Keypair": apiKey },
      cache: "no-store",
    });

    // Prepare URLs for attendees and organiser
    const attendeesUrl = `https://billetto.dk/api/events/${id}/attendees`;
    const organiserUrl = `https://billetto.dk/api/users/${eventData.organiser.id}`;

    // Fetch attendees and organiser data in parallel
    const [attendeesData, organiserData] = await Promise.all([
      fetchWithCache(attendeesUrl, {
        headers: { "Api-Keypair": apiKey },
        cache: "no-store",
      }),
      fetchWithCache(organiserUrl, {
        headers: { "Api-Keypair": apiKey },
        cache: "no-store",
      }),
    ]);

    // Construct the response
    return NextResponse.json({
      ...eventData,
      attendees: attendeesData.data,
      organiser: {
        ...eventData.organiser,
        ...organiserData.data,
      },
    });
  } catch (error) {
    console.error("Error fetching event data:", error);
    return NextResponse.json({ message: "Error fetching event data" }, { status: 500 });
  }
}
