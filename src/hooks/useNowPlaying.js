import { useDispatch } from "react-redux";
import { API_CONSTANTS, API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlaying = () => {

  const dispatch = useDispatch();


  const getNowPlayingMovies = async() =>{
    const response = await fetch(API_URL, API_CONSTANTS);
    const json = await response.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}

export default useNowPlaying