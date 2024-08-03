import React from "react";
import PropTypes from "prop-types";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const BackgroundTrailer = ({ id }) => {
  const trailerInfo = useSelector((store) => store.movies.nowPlayingTrailer);
  useMovieTrailer(id);

  return (
    <div className="w-screen h-full absolute">
      {trailerInfo ? (
        <iframe
          title="Background Trailer"
          src={`https://www.youtube.com/embed/${trailerInfo.key}?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=${trailerInfo.key}&modestbranding=1&iv_load_policy=3&playsinline=1&fs=0`}
          className="w-full h-full"
          allow="autoplay; clipboard-write; encrypted-media; loop"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

BackgroundTrailer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BackgroundTrailer;
