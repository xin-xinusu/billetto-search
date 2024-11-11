'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Menu } from "lucide-react"; // Optional: Use an icon library if needed

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-200 shadow bg-gray-900 px-2 sm:px-4 lg:px-8 flex items-center justify-between h-16" style={{backgroundColor: '#1b1d1e'}}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo - Hidden on mobile */}
        <Link href="/" className="hidden md:flex items-center space-x-2">
          <img
            src="/billetto-logo.png"
            alt="Billetto Logo"
            className="w-20 h-auto"
          />
        </Link>

        {/* Search Bar - Full-width on mobile */}
        <div className="flex-1 max-w-md mx-4 md:mx-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search events"
              className="w-full rounded-full px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{backgroundColor: '#1b1d1e'}}
            />
            {/* Optional: Search icon inside the input */}
            <span className="absolute left-4 top-2.5 text-gray-400">
              🔍
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links - hidden on mobile */}
        <nav className="hidden md:flex space-x-4 text-sm">
          <Link href="/organise-event" className="hover:text-gray-300">Organise event</Link>
          <Link href="/help-center" className="hover:text-gray-300">Help Center</Link>
          <Link href="/login" className="hover:text-gray-300">Log in</Link>
          <Link href="/signup" className="hover:text-gray-300">Sign up</Link>
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
          <Link href="/organise-event" className="block hover:text-gray-300">Organise event</Link>
          <Link href="/help-center" className="block hover:text-gray-300">Help Center</Link>
          <Link href="/login" className="block hover:text-gray-300">Log in</Link>
          <Link href="/signup" className="block hover:text-gray-300">Sign up</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
