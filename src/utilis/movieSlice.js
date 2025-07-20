import { createSlice } from "@reduxjs/toolkit";



const movieSlice = createSlice({
    name:"movies",
    initialState: {
     NowPlayingMovies: null,
     TrailerVideo:null,
     TrendingMovies: null,
     PopularMovies: null,
     TVTrailerVideo:null,
     
},
 reducers:{
      addNowPlayingMovies:(state,action)=>{
        state.NowPlayingMovies = action.payload
      },
      addTrendingMovies:(state,action)=>{
        state.TrendingMovies = action.payload
      },
       addPopularMovies:(state,action)=>{
        state.PopularMovies = action.payload
      },
      
      addTrailerVideo:(state,action)=>{
        state.TrailerVideo = action.payload
      },
      addTVTrailerVideo:(state,action)=>{
        state.TVTrailerVideo = action.payload
      }
 }


})


export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrendingMovies} = movieSlice.actions
export default movieSlice.reducer