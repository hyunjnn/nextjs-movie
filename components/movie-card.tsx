'use client';

import Image from 'next/image';
import Link from 'next/link';

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
}

export default function MovieCard({ id, title, poster_path, vote_average, overview }: MovieProps) {
  return (
    <Link
      prefetch
      href={`/movies/${id}`}
      className="bg-gradient-to-r from-gray-950 via-yellow-950 to-gray-950 text-white rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
    >
      <Image src={poster_path} alt={title} width={250} height={375} loading="lazy" className="w-full h-auto" />

      <div className="p-3">
        <h2 className="text-lg font-semibold truncate mb-2">{title}</h2>
        <p className="text-sm">⭐ {vote_average.toFixed(1)}</p>
        <p className="text-sm text-gray-300 mt-2 line-clamp-2">{overview}</p>
      </div>
    </Link>
  );
}
