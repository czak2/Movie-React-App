import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  bannerData: [],
  imageUrl: "",
};
export const movieSlice = createSlice({
  name: "movieo",
  initialState: initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});
export const movieoActions = movieSlice.actions;
