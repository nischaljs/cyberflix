import React from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const BackgroundTrailer = ({ id }) => {
  const trailerInfo = useSelector((store) => store.movies.nowPlayingTrailer);
  useMovieTrailer(id);

  if (!trailerInfo) {
    return null;
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${trailerInfo.key}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailerInfo.key}&modestbranding=1&iv_load_policy=3&playsinline=1&fs=0`}
        className="absolute top-0 left-0 w-full h-full"
        allow=" autoplay; clipboard-write; encrypted-media; loop"
        allowFullScreen
        frameBorder="0"
        style={{ border: "none" }}
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  );
};

export default BackgroundTrailer;
