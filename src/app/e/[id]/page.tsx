"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { generateMetadata } from "@/utils/generateMetadata";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import EventImage from "@/components/Event/EventImage";
import EventDetails from "@/components/Event/EventDetails";
import EventDetailsCard from "@/components/Event/EventDetailsCard";
import Map from "@/components/Event/Map";
import FAQ from "@/components/Event/FAQ";
import OrganiserInfo from "@/components/Event/OrganiserInfo";
import Loader from "@/components/Loader/Loader";

const EventPage: React.FC = () => {
  const { id } = useParams(); // Get the event ID from the route
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [metadata, setMetadata] = useState<any>(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const res = await fetch(`/api/events/${id}`, { cache: "no-store" });

        if (!res.ok) {
          throw new Error(`Failed to fetch event data: ${res.statusText}`);
        }

        const data = await res.json();
        setEvent(data);

        // Generate metadata locally
        const meta = generateMetadata(data);
        setMetadata(meta);
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEventData();
    }
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen"><Loader /></div>;
  }

  if (!event) {
    return <div className="text-center py-10">Event not found.</div>;
  }

  return (
    <>
      {/* Render Metadata */}
      {metadata && (
        <>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          {metadata.openGraph?.title && (
            <meta property="og:title" content={metadata.openGraph.title} />
          )}
          {metadata.openGraph?.description && (
            <meta property="og:description" content={metadata.openGraph.description} />
          )}
          {metadata.openGraph?.images?.[0]?.url && (
            <meta property="og:image" content={metadata.openGraph.images[0].url} />
          )}
          {metadata.openGraph?.siteName && (
            <meta property="og:site_name" content={metadata.openGraph.siteName} />
          )}
          {metadata.twitter?.card && (
            <meta name="twitter:card" content={metadata.twitter.card} />
          )}
          {metadata.twitter?.title && (
            <meta name="twitter:title" content={metadata.twitter.title} />
          )}
          {metadata.twitter?.description && (
            <meta name="twitter:description" content={metadata.twitter.description} />
          )}
          {metadata.twitter?.images?.[0] && (
            <meta name="twitter:image" content={metadata.twitter.images[0]} />
          )}
        </>
      )}

      <div className="max-w-7xl mx-auto space-y-4 sm:pt-4 sm:mt-0 border-b border-gray-700 pb-10 sm:px-4">
        <Breadcrumb
          category={event.categorization.category_localized}
          subcategory={event.categorization.subcategory_localized}
          type={event.categorization.type_localized}
        />
        <h1 className="font-bold text-gray-50 text-2xl leading-9 hidden lg:block">{event.title}</h1>
        <div className="grid gap-4 items-start lg:grid-cols-3">
          <div className="lg:col-span-2">
            <EventImage src={event.image_link} alt={event.title} />
            <EventDetails description={event.description} />
            <OrganiserInfo organiser={event.organiser} />
            <Map
              locationName={event.location.location_name}
              address={`${event.location.address_line}, ${event.location.city}, ${event.location.country}`}
              coordinates={event.location.coordinates}
            />
            <FAQ
              questionsArray={[
                {
                  question: "I was not sure where to source this data so I thought a few random questions would do. Sorry.",
                  answer: "Did search and play around to find the available expanded version of an API but I wasn't about to source its endpoint, so this will need to do for display purposes. 🫤",
                },
              ]}
            />
          </div>
          <div>
            <EventDetailsCard
              availability={event.availability}
              price={event.minimum_price.amount_in_cents}
              currency={event.minimum_price.currency}
              location={{
                location_name: event.location.location_name,
                address_line: event.location.address_line,
                city: event.location.city,
                postal_code: event.location.postal_code,
              }}
              startdate={event.startdate}
              enddate={event.enddate}
              attendees={event.attendees}
              categorization={event.categorization}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;

