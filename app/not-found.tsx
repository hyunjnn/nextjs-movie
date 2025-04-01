import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NotFound',
  robots: 'noindex',
};

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className="text-3xl font-bold text-white">404 Error Page</h1>
        <p className="text-gray-400 mt-4 mb-10">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="flex items-center justify-center rounded-full font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-orange-700 h-12 px-8"
        >
          <span className="text-lg">Go to Homepage</span>
        </a>
      </div>
    </>
  );
}
