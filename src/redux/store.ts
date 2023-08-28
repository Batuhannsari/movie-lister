import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { moviesOrSeriesSlice } from "./slices/movieOrSeriesSlice";
import { filtersSlice } from "./slices/filtersSlicer";

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