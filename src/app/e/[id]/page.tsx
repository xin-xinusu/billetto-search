'use client';
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import EventImage from "@/components/Event/EventImage";
import EventDetails from "@/components/Event/EventDetails";
import EventDetailsCard from "@/components/Event/EventDetailsCard";
import Map from "@/components/Event/Map";
import FAQ from "@/components/Event/FAQ";
import OrganiserInfo from "@/components/Event/OrganiserInfo";
import Attendees from "@/components/Event/Attendees";

const EventPage: React.FC = () => {
  const { id } = useParams(); // Get the event ID from the route
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const res = await fetch(`/api/events/${id}`, { cache: "no-store" });

        if (!res.ok) {
          throw new Error(`Failed to fetch event data: ${res.statusText}`);
        }

        const data = await res.json();
        console.log('data', data)
        setEvent(data);
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
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!event) {
    return <div className="text-center py-10">Event not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        category={event.categorization.category_localized}
        subcategory={event.categorization.subcategory_localized}
        type={event.categorization.type_localized}
      />
      <h1>{event.title}</h1>
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <EventImage src={event.image_link} alt={event.title} />

          <EventDetails description={event.description} />

          <Map
            locationName={event.location.location_name}
            address={`${event.location.address_line}, ${event.location.city}, ${event.location.country}`}
            coordinates={event.location.coordinates}
          />

          <FAQ />

          <OrganiserInfo name={event.organiser.name} />
        </div>

        {/* Right Column (Sticky Sidebar) */}
        <div>
          <EventDetailsCard
            price={event.minimum_price.amount_in_cents / 100}
            currency={event.minimum_price.currency}
            availability={event.availability}
            attendees={event.attendees}
            location={{
              location_name: event.location.location_name,
              address_line: event.location.address_line,
              city: event.location.city,
              postal_code: event.location.postal_code,
            }}
            startdate={event.startdate}
            enddate={event.enddate}
            categorization={{
              category_localized: event.categorization.category_localized,
              subcategory_localized: event.categorization.subcategory_localized,
              type_localized: event.categorization.type_localized,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EventPage;
