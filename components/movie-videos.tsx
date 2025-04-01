const URL = process.env.NEXT_PUBLIC_MOVIE_API;

const getVideos = async (id: string) => {
  const data = await fetch(`${URL}/${id}/videos`);
  return await data.json();
};

export default async function MovieVideos({ id }: { id: string }) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error('broken');
  const videos = await getVideos(id);
  return (
    <div className="grid grid-cols-4 gap-4">
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="rounded-lg"
        />
      ))}
    </div>
  );
}
