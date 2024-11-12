"use client"

import React, { useCallback, useState } from 'react';
import { Event } from '@/types/event';
import Link from 'next/link';
import Input from '../UI/input';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);

      if (value.length > 2) {
        setLoading(true);
        try {
          const res = await fetch(`/api/search?query=${encodeURIComponent(value)}`);
          const data = await res.json();
          console.log('data.results[0]', data.results[0])
          setResults(data.results || []);
        } catch (error) {
          console.error("Error fetching search results:", error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]); // Clear results if query is less than 3 characters
      }
    },
    []
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-white">Event Search</h1>
      <div className="flex gap-2 mb-4">
        <Input
          value={query}
          onChange={(e: any) => handleSearch(e)}
          placeholder="Search for events..."
          className="flex-1 text-white p-4 border-white"
        />
      </div>

      <div className="space-y-2">
        {results.map((event) => (
          <Link
            key={event.id}
            href={`/e/${event.id}`}
            passHref
            className="block border rounded-lg p-3 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center gap-3">
              {event.image_link && (
                <img
                  src={event.image_link}
                  alt={event.title || "Event Image"}
                  className="w-10 h-10 rounded-md object-cover"
                />
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-800 truncate">
                  {event.title || "Untitled Event"}
                </h3>
                <p className="text-xs text-gray-500 truncate">{event.category}</p>
                <div className="flex items-center text-xs text-gray-600 mt-1 space-x-2">
                  <span>
                    {new Date(event.start_date).toLocaleDateString()}{" "}
                    {new Date(event.start_date).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                  <span>•</span>
                  <span>{event.location_name || "Unknown Location"}</span>
                </div>
              </div>
              <div className="text-xs font-medium text-right">
                <p className={event.availability ? "text-green-500" : "text-red-500"}>
                  {event.availability ? "Available" : "Sold Out"}
                </p>
                <p className="text-gray-800">
                  {event.minimum_price ? `${event.currency} ${(event.minimum_price*100).toFixed(2)}` : "Free"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
