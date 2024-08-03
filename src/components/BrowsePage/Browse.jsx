import React from "react";
import useNowPlaying from "../../hooks/useNowPlaying";
import UpperTrailerPlayer from "./UpperTrailerPlayer";
import LowerMovieRecommendations from "./LowerMovieRecommendations";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlaying();

  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return <div className="w-screen h-screen flex items-center justify-center text-white">Loading...</div>;
  }

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div className="w-screen h-auto">
      <UpperTrailerPlayer movie={randomMovie} />
      <LowerMovieRecommendations />
    </div>
  );
};

export default Browse;
