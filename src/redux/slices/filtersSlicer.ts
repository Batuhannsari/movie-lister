import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "@/ınterfaces/Movie";
import store, { useAppDispatch } from "../store";


export interface FiltersSliceType {
    s: string;
    y: string;
    type: "movie" | "series" | "episode",

}

const initialState: FiltersSliceType = {
    s: "pokemon",
    y: "2010",
    type: "movie"
};


export const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.s = action.payload
        },
        setYear: (state, action: PayloadAction<string>) => {
            state.y = action.payload
        },
        setType: (state, action: PayloadAction<"movie" | "series" | "episode">) => {
            state.type = action.payload
        }
    },
},);

export const { setSearch, setType, setYear } = filtersSlice.actions;

export default filtersSlice.reducer;