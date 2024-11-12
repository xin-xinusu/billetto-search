"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Event } from "@/types/event";
import { formatEventDate } from "@/utils/date-functions";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement>(null); // Ref for search input and results

  const handleSearch = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);

      if (value.length > 2) {
        setLoading(true);
        try {
          const res = await fetch(`/api/search?query=${encodeURIComponent(value)}`);
          const data = await res.json();
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

  const closeSearch = () => {
    setQuery("");
    setResults([]);
  };

  // Close search results when clicking outside the search area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        closeSearch();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-200 shadow bg-gray-900 px-2 sm:px-4 lg:px-8 flex items-center justify-between h-16">
      <div className="grow flex items-center gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 hidden lg:block text-gray-900 dark:text-white focus:ring focus:ring-white/50 focus:outline-none"
        >
          <img
            src="/billetto-logo.png"
            alt="Billetto Logo"
            className="block w-auto h-8"
          />
        </Link>

        {/* Search Bar */}
        <div className="grow hidden sm:block relative" ref={searchContainerRef}>
          <label htmlFor="search" className="sr-only">
            Search events
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="z-10 w-5 h-5 text-gray-400 dark:text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M9.5 18A8.5 8.5 0 109.5 1a8.5 8.5 0 000 17z"
                />
              </svg>
            </div>
            <input
              id="search"
              name="text"
              type="search"
              placeholder="Search events"
              autoComplete="off"
              value={query}
              onChange={handleSearch}
              className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-400 bg-white border rounded-full dark:bg-gray-800 dark:text-gray-50 focus:outline-none focus:border-gray-400 dark:focus:border-white focus:ring-gray-200 dark:focus:ring-gray-800 focus:text-gray-900 dark:focus:text-white sm:text-sm"
            />
          </div>
          {/* Search Results Dropdown */}
          {query.length > 2 && (
            <div className="absolute top-12 left-0 w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50 max-h-60 overflow-y-auto">
              {loading ? (
                <p className="p-4 text-sm text-gray-500">Loading...</p>
              ) : results.length > 0 ? (
                results.map((event) => (
                  <Link
                    key={event.id}
                    href={`/e/${event.id}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    onClick={closeSearch}
                  >
                    <div className="flex items-center gap-3">
                      {event.image_link && (
                        <img
                          src={event.image_link}
                          alt={event.title || "Event Image"}
                          className="w-10 h-10 rounded-md object-cover"
                        />
                      )}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                          {event.title || "Untitled Event"}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {event.location_name} | {formatEventDate(event.start_date, event.end_date)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="p-4 text-sm text-gray-500">No results found</p>
              )}
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="grow flex items-center justify-end gap-2">
          <Link
            href="#"
            className="hidden lg:block inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:border-brand-500 dark:border-transparent dark:hover:border-brand-200 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-gray-500 transition-all duration-500"
          >
            Organise event
          </Link>
          <Link
            href="#"
            className="hidden lg:block inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:border-brand-500 dark:border-transparent dark:hover:border-brand-200 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-gray-500 transition-all duration-500"
          >
            Help Center
          </Link>
          <Link
            href="#"
            className="hidden lg:block inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:border-brand-500 dark:border-transparent dark:hover:border-brand-200 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-gray-500 transition-all duration-500"
          >
            Log in
          </Link>
          <Link
            href="#"
            className="hidden lg:block inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-transparent hover:border-brand-500 dark:border-transparent dark:hover:border-brand-200 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-gray-500 transition-all duration-500"
          >
            Sign up
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
