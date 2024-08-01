import { useEffect } from "react";
import { API_CONSTANTS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingTrailer } from "../utils/movieSlice";

const useMovieTrailer = (id) =>{
    const dispatch = useDispatch();
    const fetchMovieTrailer= async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_CONSTANTS);
        const moviesVideos = await(data.json());
        const trailers = moviesVideos?.results.filter((videos)=>videos?.type == "Trailer");
        dispatch(addNowPlayingTrailer((!trailers.length ? trailers : trailers[0])));
    }

    useEffect(()=>{
        fetchMovieTrailer();
    },[])
}

export default useMovieTrailer;