import { createSlice } from "@reduxjs/toolkit";
import { InitApp } from "utils/types/initApp";
import { emptyMedia } from "utils/types/media";

const initialState: InitApp = {
  texts: {},
  menus: [],
  ingredientsMenus: {},
  homeBanner: emptyMedia,
  logo: emptyMedia,
};

export const initAppSlice = createSlice({
  name: "initApp",
  initialState,
  reducers: {
    setInitApp: (state, action) => action.payload,
  },
});

export const { setInitApp } = initAppSlice.actions;

export default initAppSlice.reducer;
