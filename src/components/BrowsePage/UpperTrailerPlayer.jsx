import React from 'react';
import BackgroundTrailer from './BackgroundTrailer';
import UpperMovieInfo from './UpperMovieInfo';

const UpperTrailerPlayer = ({ movie }) => {
  return (
    <div className="relative overflow-hidden w-screen min-h-[30rem] md:h-screen">
      <BackgroundTrailer id={movie.id} />
      <UpperMovieInfo movie={movie} />
    </div>
  );
};

export default UpperTrailerPlayer;
