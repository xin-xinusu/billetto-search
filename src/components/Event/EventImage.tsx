const EventImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="mb-6">
    <img
      src={src}
      alt={alt || "Event Image"}
      className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
      loading="lazy"
    />
  </div>
);

export default EventImage;
