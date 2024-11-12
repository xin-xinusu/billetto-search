'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react"; // Optional: Use an icon library if needed

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-200 shadow bg-gray-900 px-2 sm:px-4 lg:px-8 flex items-center justify-between h-16">
      <div className="grow flex items-center gap-4">
        {/* Logo - Hidden on mobile */}
        <Link href="/" className="shrink-0 text-gray-900 dark:text-white focus:outline-none">
          <img
            src="/billetto-logo.png"
            alt="Billetto Logo"
            className="block w-auto h-8"
          />
        </Link>

        {/* Search Bar - Full-width on mobile */}
        <div className="grow hidden sm:block">
          <label htmlFor="search" className="sr-only">
            Search events
          </label>
          <div id="instant-search">
            <div className="relative">
              {/* Icon */}
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
                  {/* Add SVG Path here */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M9.5 18A8.5 8.5 0 109.5 1a8.5 8.5 0 000 17z"
                  />
                </svg>
              </div>
              {/* Search Input */}
              <form action="/en/search" className="relative">
                <input
                  id="search"
                  name="text"
                  type="search"
                  placeholder="Search events"
                  autoComplete="off"
                  className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-400 bg-white border rounded-full dark:bg-gray-800 dark:text-gray-50 focus:outline-none focus:border-gray-400 dark:focus:border-white focus:ring-gray-200 dark:focus:ring-gray-800 focus:text-gray-900 dark:focus:text-white sm:text-sm"
                />
              </form>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links - hidden on mobile */}
        <nav className="grow flex items-center justify-end gap-2">
          <Link href="/organise-event" className="hidden lg:block inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-white dark:border-gray-900 dark:hover:border-brand-200 hover:border-brand-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-gray-500">Organise event</Link>
          <Link href="/help-center" className="hidden lg:block inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-white dark:border-gray-900 dark:hover:border-brand-200 hover:border-brand-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-gray-500">Help Center</Link>
          <Link href="/login" className="hidden lg:block inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-white dark:border-gray-900 dark:hover:border-brand-200 hover:border-brand-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-gray-500">Log in</Link>
          <Link href="/signup" className="hidden lg:block inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-white dark:border-gray-900 dark:hover:border-brand-200 hover:border-brand-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-gray-500">Sign up</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-gray-800 text-white rounded-lg shadow-lg p-4 space-y-2">
          <Link href="/organise-event" className="hidden lg:block inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-white dark:border-gray-900 dark:hover:border-brand-200 hover:border-brand-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-gray-500">Organise event</Link>
          <Link href="/help-center" className="hidden lg:block inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-white dark:border-gray-900 dark:hover:border-brand-200 hover:border-brand-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-gray-500">Help Center</Link>
          <Link href="/login" className="hidden lg:block inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-white dark:border-gray-900 dark:hover:border-brand-200 hover:border-brand-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-gray-500">Log in</Link>
          <Link href="/signup" className="hidden lg:block inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 border-b-2 border-white dark:border-gray-900 dark:hover:border-brand-200 hover:border-brand-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-gray-500">Sign up</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
