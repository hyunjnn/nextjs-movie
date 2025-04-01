import BackdropSlider from './backdrop-slider';

const URL = process.env.NEXT_PUBLIC_MOVIE_API;

const getMovies = async () => {
  const data = await fetch(URL);
  return await data.json();
};

export default async function BackdropSliderWrapper() {
  const movies = await getMovies();
  const topmovies = movies.slice(5);
  return (
    <div className="absolute inset-0 -z-10">
      <BackdropSlider movies={topmovies} />
    </div>
  );
}
