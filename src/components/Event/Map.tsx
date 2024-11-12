import React, { useEffect, useRef } from 'react';
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ({
  locationName,
  address,
  coordinates,
}: {
  locationName: string;
  address: string;
  coordinates: { latitude: number; longitude: number };
}) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<MapboxMap | null>(null);

  const accessToken =
    'pk.eyJ1IjoiYmlsbGV0dG8iLCJhIjoiY2lyMXJ3OXpsMDA3a2h6bmozYWphMjEyOCJ9.vQqz0GkYEtjlgClKdecAaw';

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    mapboxgl.accessToken = accessToken;

    try {
      // Initialize the Mapbox map
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [coordinates.longitude, coordinates.latitude],
        zoom: 14,
        interactive: false,
        attributionControl: false, // Remove attribution controls
        logoPosition: 'bottom-right', // Optional: Set logo position or hide with CSS
      });

      // Add Marker
      new mapboxgl.Marker({ color: '#999999' })
        .setLngLat([coordinates.longitude, coordinates.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h4>${locationName}</h4><p>${address}</p>`
          )
        )
        .addTo(map.current);

      // Optional: Remove logo and attribution entirely with CSS
      const mapboxLogo = document.querySelector('.mapboxgl-ctrl-logo');
      if (mapboxLogo) mapboxLogo.remove();

      const mapboxAttribution = document.querySelector('.mapboxgl-ctrl-attrib');
      if (mapboxAttribution) mapboxAttribution.remove();

    } catch (error) {
      console.error('Error initializing Mapbox:', error);
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [coordinates, locationName, address, accessToken]);

  return (
    <div className="lg:col-span-2 pt-4">
      <details className='sm:rounded-lg bg-gray-800 p-4 lg:p-6 space-y-4 group'>
        <summary className='cursor-pointer relative w-full flex justify-between items-center text-left details-marker:hidden'>
          <h2 className='text-white group-hover:text-gray-300 font-bold leading-4 m-0'>
            Venue
          </h2>
          <span className='ml-6 flex items-center'>
            
          </span>
        </summary>
        
        {/* Map container */}
        <div
          ref={mapContainer}
          className="min-w-full mapboxgl-map"
          style={{ minHeight: '480px', minWidth: '300px' }}
        ></div>

        {/* Address and Directions */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className='flex-1 min-w-0'>
            <p className="text-sm text-gray-500">{address}</p>
          </div>
          <div className='w-full md:w-auto'>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${coordinates.latitude},${coordinates.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-400 rounded-md px-4 py-2 text-sm text-gray-50 bg-gray-800 hover:bg-gray-700"
          >
            Get Directions
          </a>
          </div>
          
        </div>
      </details>
    </div>
  );
};

export default Map;
