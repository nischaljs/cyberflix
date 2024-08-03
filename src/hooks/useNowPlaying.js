import { useDispatch } from "react-redux";
import { API_CONSTANTS, NOWPLAYING_API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlaying = () => {

  const dispatch = useDispatch();


  const getNowPlayingMovies = async() =>{
    const response = await fetch(NOWPLAYING_API_URL, API_CONSTANTS);
    const json = await response.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}

export default useNowPlaying