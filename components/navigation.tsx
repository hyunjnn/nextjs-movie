'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className=" bg-black/60 fixed top-0 left-0 w-full z-50 bg-black/40 text-white border-b border-zinc-700 shadow-sm">
      <ul className="flex space-x-8 px-6 py-3 items-center text-lg font-semibold">
        <li>
          <Link href="/" className={`hover:text-white ${path === '/' ? 'text-white' : 'text-gray-400'}`}>
            Movie
          </Link>
        </li>
        <li>
          <Link href="/about" className={`hover:text-white ${path === '/about' ? 'text-white' : 'text-gray-400'}`}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
