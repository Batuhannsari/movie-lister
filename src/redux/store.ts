import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { filtersSlice } from "./slices/filtersSlicer";
import { moviesOrSeriesSlice } from "./slices/movieOrSeriesSlice";

const store = configureStore({
  reducer: {
    movies: moviesOrSeriesSlice.reducer,
    filters: filtersSlice.reducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;