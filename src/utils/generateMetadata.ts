import { Metadata } from "@/types/metadata";

export const generateMetadata = (event: any): Metadata => {
  return {
    title: `${event.title} | Billetto`,
    description: event.description || "Find exciting events and book tickets now.",
    openGraph: {
      title: event.title,
      description: event.description,
      images: [
        {
          url: event.image_link || "/default-event-image.png",
          width: 1200,
          height: 675,
          alt: event.title || "Event Image",
        },
      ],
      siteName: "Billetto",
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.description,
      images: [event.image_link || "/default-event-image.png"],
    },
  };
};
