import Image from 'next/image';

const URL = process.env.NEXT_PUBLIC_MOVIE_API;

export const getMovie = async (id: string) => {
  const data = await fetch(`${URL}/${id}`);
  return await data.json();
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <>
      <Image src={movie.poster_path} alt={movie.title} width={300} height={400} className="rounded-2xl m-6 ml-60" />
    </>
  );
}
