export const generateMetadata = (event: any) => {
  try {
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
  } catch (error) {
    console.error("Error generating metadata:", error);

    return {
      title: "Event | Billetto",
      description: "Find exciting events and book tickets now.",
    };
  }
};
