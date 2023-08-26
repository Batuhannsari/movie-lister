import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "@/ınterfaces/Movie";

interface FilterSliceType {
    s: string;
    y: number;
    type: "movie" | "series" | "episode"
}

const initialState: FilterSliceType = {
    s: "pokemon",
    y: 2023,
    type: "movie"
};


export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {

    },

},);


export default filterSlice.reducer;