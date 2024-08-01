import React from "react";
import useNowPlaying from "../../hooks/useNowPlaying";
import UpperTrailerPlayer from "./UpperTrailerPlayer";
import LowerMovieRecommendations from "./LowerMovieRecommendations";
import { useSelector } from "react-redux";


const Browse = () => {
useNowPlaying();

const movies = useSelector((store)=> (store.movies.nowPlayingMovies));
 if(!movies){
  return
 }


  return (
    <>
      <UpperTrailerPlayer movie={movies[Math.floor(Math.random()*20)]}/>
      <LowerMovieRecommendations/>
    </>
  );
};

export default Browse;
