import { useDispatch } from "react-redux";
import { addGeminiSuggestedMovies, removeGeminiSuggestedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_CONSTANTS } from "../utils/constants";

const useGeminiSuggestedMovies = (suggestedMovies) => {
    const dispatch = useDispatch();
    const fetchSuggestedMovie= async (movieName) =>{
 
        
        const response= await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_CONSTANTS);
        const data = await response.json();
        
        dispatch(addGeminiSuggestedMovies(data));
    }

    useEffect(()=>{
        suggestedMovies.map((movieName)=>(fetchSuggestedMovie(movieName)));

        return(
            dispatch(removeGeminiSuggestedMovies())
        )
    },[])
};

export default useGeminiSuggestedMovies;
