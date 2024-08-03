export const API_CONSTANTS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
  },
};

export const NOWPLAYING_API_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/"

export const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"


export const UPCOMING_URL= "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"