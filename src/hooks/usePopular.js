import { useDispatch } from "react-redux";
import { API_CONSTANTS, POPULAR_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const usePopular = () => {

  const dispatch = useDispatch();


  const getPopularMovies = async() =>{
    const response = await fetch(POPULAR_URL, API_CONSTANTS);
    const json = await response.json();
    dispatch(addPopularMovies(json.results));
  }

  useEffect(()=>{
    getPopularMovies();
  },[])
}

export default usePopular