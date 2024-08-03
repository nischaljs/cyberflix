import React from 'react';
import { useSelector } from 'react-redux';
import usePopular from '../../hooks/usePopular';
import useUpcomingMovies from '../../hooks/useUpcomingMovies';
import MovieList from './MovieList';

const LowerMovieRecommendations = () => {
  usePopular();
  useUpcomingMovies();
  
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, popularMovies, upcomingMovies } = movies;

  const renderMovieList = (title, list) => {
    if (!list) {
      return <div className="text-white p-4">Loading {title}...</div>;
    }

    if (list.length === 0) {
      return <div className="text-white p-4">No {title} available at the moment.</div>;
    }

    return <MovieList listTitle={title} moviesList={list} />;
  };

  return (
    <div className="bg-black p-4">
      {renderMovieList('Now Playing Movies', nowPlayingMovies)}
      {renderMovieList('Popular Movies', popularMovies)}
      {renderMovieList('Upcoming Movies', upcomingMovies)}
    </div>
  );
};

export default LowerMovieRecommendations;
