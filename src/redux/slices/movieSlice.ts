import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "@/ınterfaces/Movie";

interface MoviesSliceType {
    list: Movie[];
}

const initialState: MoviesSliceType = {
    list: [],
};

export const getMovies = createAsyncThunk(
    "movies/getAll",
    async () => {
        const response = await fetch(
            "http://www.omdbapi.com/?apikey=8e2b0a83&s=pokemon"
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