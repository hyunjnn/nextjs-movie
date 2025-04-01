import { Metadata } from 'next';
import Navigation from '../components/navigation';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Movie App',
    default: 'Movie app',
  },
  description: 'Explore trending movies and details.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black pt-13" suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
