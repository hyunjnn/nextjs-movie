'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4"
      style={{
        transform: `translateY(${offsetY * 0.3}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to{' '}
        <span className="text-black bg-gradient-to-r from-blue-600 via-purple-700 to-orange-700 p-3">Movie App</span>
      </h1>
      <p className="text-gray-300 md:text-lg max-w-2xl mt-4">
        Explore trending movies, trailers, casts, and reviews in one place.
      </p>
    </div>
  );
}
