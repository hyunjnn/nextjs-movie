'use client';

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center mt-32 px-4 text-center">
      <h1 className="text-2xl font-bold text-white">Something went wrong!</h1>
      <p className="text-gray-400 mt-4 mb-12">
        There was a problem loading the movie data. <br />
        Please check your network connection or try again later.
      </p>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => reset()}
          className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-gradient-to-r from-blue-700 via-purple-700 to-orange-700 border border-black px-6 py-2 rounded-full text-black hover:bg-gray-100 transition"
        >
          ➝ Go to Homepage
        </Link>
      </div>
    </div>
  );
}
