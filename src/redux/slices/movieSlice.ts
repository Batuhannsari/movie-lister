import { queryBuilder } from "@/utils/queryBuilder";
import { ListType } from "@/ınterfaces/ListType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import store from "../store";

interface MoviesSliceType {
    list: ListType;
}

const initialState: MoviesSliceType = {
    list: {
        Search: [],
        totalResults: "",
        Response: ""
    },
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