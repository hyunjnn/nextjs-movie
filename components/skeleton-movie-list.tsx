export default function SkeletonMovieList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="w-full h-[450px] bg-gray-800 rounded" />
          <div className="h-4 bg-gray-700 rounded mt-2 w-3/4" />
          <div className="h-4 bg-gray-600 rounded mt-1 w-1/2" />
        </div>
      ))}
    </div>
  );
}
