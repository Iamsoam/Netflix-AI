import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movies: null,
    name:null
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addgptmovies:(state, action) => {
      state.movies = action.payload.movies;
      state.name = action.payload.name;
    }

  },
});

export const { toggleGptSearchView, addgptmovies } = gptSlice.actions;

export default gptSlice.reducer;