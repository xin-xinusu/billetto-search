// src/app/page.tsx
import Header from '@/components/Layout/Header';
import Search from '@/components/Search/Search';

export default function Home() {
  return (
    <div className="max-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-center py-16 px-6">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Discover Events Near You
        </h1>
        <p className="text-lg lg:text-xl text-gray-300 mt-4">
          Explore what's happening in your city and beyond.
        </p>
        
        <Search />
      </header>
    </div>
  );
}
