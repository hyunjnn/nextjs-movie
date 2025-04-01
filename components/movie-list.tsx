import MovieCard from './movie-card';

const URL = process.env.NEXT_PUBLIC_MOVIE_API;

const getMovies = async () => {
  const data = await fetch(URL);
  return await data.json();
};

export default async function MovieList() {
  const movies = await getMovies();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
