import { Suspense } from 'react';
import MovieList from '../../components/movie-list';
import BackdropSliderWrapper from '../../components/backdrop-wrapper';
import SkeletonMovieList from '../../components/skeleton-movie-list';
import SkeletonSlider from '../../components/skeleton-slider';
import Hero from '../../components/hero';

export const metadata = {
  title: 'Home',
  description: 'Discover trending and latest movies with detailed information.',
};

export default async function HomePage() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <Suspense fallback={<SkeletonSlider />}>
          <BackdropSliderWrapper />
        </Suspense>
        <Hero />
      </section>
      <Suspense fallback={<SkeletonMovieList />}>
        <MovieList />
      </Suspense>
    </>
  );
}
