import { useDispatch } from "react-redux";
import { API_CONSTANTS, UPCOMING_URL,  } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {

  const dispatch = useDispatch();


  const getUpcomingMovies = async() =>{
    const response = await fetch(UPCOMING_URL, API_CONSTANTS);
    const json = await response.json();
    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(()=>{
    getUpcomingMovies();
  },[])
}

export default useUpcomingMovies