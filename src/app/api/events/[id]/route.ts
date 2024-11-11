import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ message: "Event ID is required" }, { status: 400 });
  }

  try {
    const res = await fetch(`${process.env.BILLETTO_API_URL}/${id}`, {
      headers: {
        "Api-Keypair": process.env.BILLETTO_KEY_PAIR as string,
      },
      cache: "no-store",
    });

    const attendees = await fetch(`https://billetto.dk/api/events/${id}/attendees`, {
      headers: {
        "Api-Keypair": process.env.BILLETTO_KEY_PAIR as string,
      },
      cache: "no-store",
    });

    console.log('attendees', attendees)

    if (!res.ok) {
      throw new Error(`Failed to fetch event data: ${res.statusText}`);
    }

    const attendeesData = await attendees.json();
    const data = await res.json();
    return NextResponse.json({...data, attendees: attendeesData.data});
  } catch (error) {
    console.error("Error fetching event data:", error);
    return NextResponse.json({ message: "Error fetching event data" }, { status: 500 });
  }
}
