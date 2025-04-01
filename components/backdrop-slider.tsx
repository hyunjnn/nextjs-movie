'use client';

import Slider from 'react-slick';
import Image from 'next/image';

export default function BackdropSlider({ movies }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {movies.map((movie, idx) => (
          <div key={movie.id} className="relative w-full h-screen">
            <Image
              src={movie.backdrop_path}
              alt={movie.title}
              fill
              sizes="100vw"
              priority={idx === 0}
              className=" object-cover rounded"
              placeholder="empty"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
              <h2 className="text-xl font-bold">{movie.title}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
