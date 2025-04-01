import Link from 'next/link';

export const metadata = {
  title: 'About',
  description: 'Discover trending and latest movies with detailed information.',
};

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-center mt-40 px-4 text-center">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl text-gray-300 font-semibold tracking-wide">Comming soon!</h1>
          <Link
            href="/"
            className="bg-gradient-to-r from-blue-700 via-purple-700 to-orange-700 border border-black px-6 py-2 rounded-full text-black font-bold transition"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </>
  );
}
