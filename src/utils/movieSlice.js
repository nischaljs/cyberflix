import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movieSlice",
    initialState:{
        nowPlayingMovies:null,
        nowPlayingTrailer:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addNowPlayingTrailer:(state,action)=>{
            state.nowPlayingTrailer = action.payload
        }
    }
})


export const {addNowPlayingMovies, addNowPlayingTrailer} = movieSlice.actions;

export default movieSlice.reducer;