import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieType } from "@/ınterfaces/MovieType";
import store from "../store";
import { queryBuilder } from "@/utils/queryBuilder";

interface MoviesSliceType {
    list: MovieType[];
}

const initialState: MoviesSliceType = {
    list: [],
};


export const getMovies = createAsyncThunk(
    "movies/getAll",
    async () => {
        const reduxStore = store.getState()
        const filters = reduxStore.filters
        const query = queryBuilder(filters)
        const response = await fetch(
            "http://www.omdbapi.com/?" + query
        ).then((res) => res.json());
        return response;
    }
);


export const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    },

},);


export default moviesSlice.reducer;