import React from "react";
import MovieCard from "./MovieCard";
import CardsShimmer from "./CardsShimmer";

const SHIMMER_COUNT = 8;

const MovieList = ({ listTitle, moviesList }) => {
  return (
    <div className="p-4">
      <h4 className="text-xl font-bold mb-4 text-white">{listTitle}</h4>
      <div
        role="status"
        aria-live="polite"
        className="flex overflow-x-scroll space-x-4 hide-scrollbar"
      >
        {moviesList ? (
          moviesList.length > 0 ? (
            moviesList.map((movie) => (
              <MovieCard data={movie} key={movie?.id || movie?.key} />
            ))
          ) : (
            <div className="text-white">No movies available</div>
          )
        ) : (
          Array.from({ length: SHIMMER_COUNT }).map((_, index) => (
            <CardsShimmer key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;
