import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    nowPlayingTrailer: null,
    upcomingMovies: null,
    geminiSuggestedMovies: [],
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addGeminiSuggestedMovies: (state, action) => {
      state.geminiSuggestedMovies = [
        ...state.geminiSuggestedMovies,
        action.payload,
      ];
    },
    removeGeminiSuggestedMovies: (state, payload) => {
      state.geminiSuggestedMovies = [];
    },
  },
});

export const {
  addNowPlayingMovies,
  addNowPlayingTrailer,
  addPopularMovies,
  addUpcomingMovies,
  addGeminiSuggestedMovies,
  removeGeminiSuggestedMovies
} = movieSlice.actions;

export default movieSlice.reducer;
