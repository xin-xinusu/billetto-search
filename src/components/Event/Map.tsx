const Map = ({ locationName, address, coordinates }: { locationName: string; address: string; coordinates: { latitude: number; longitude: number } }) => (
  <div className="mt-4">
    <iframe
      src={`https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}&output=embed`}
      title={`Map of ${locationName}`}
      className="w-full h-64 rounded-lg"
    ></iframe>
    <div className="flex items-center justify-between mt-2">
      <p className="text-sm text-gray-500">{address}</p>
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${coordinates.latitude},${coordinates.longitude}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        Get Directions
      </a>
    </div>
  </div>
);

export default Map;
