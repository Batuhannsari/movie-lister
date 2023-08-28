import { queryBuilder } from "@/utils/queryBuilder";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import store from "../store";
import { ListType } from "@/ınterfaces/ListType";
import { useRouter } from "next/router";
import { MovieDetailType } from "@/ınterfaces/MovieDetailType";
import { SeriesDetailType } from "@/ınterfaces/SeriesDetailType";

interface MoviesOrSliceType {
    list: ListType;
    imdbID: string;
    movie: MovieDetailType;
    series: SeriesDetailType
}

const initialState: MoviesOrSliceType = {
    list: {
        Search: [],
        totalResults: "",
        Response: ""
    },
    imdbID: "",
    movie: {
        Title: "",
        Year: "",
        Rated: "",
        Released: "",
        Runtime: "",
        Genre: "",
        Director: "",
        Writer: "",
        Actors: "",
        Plot: "",
        Language: "",
        Country: "",
        Awards: "",
        Poster: "",
        Ratings: {
            Source: "",
            Value: "",
        },
        Metascore: "",
        imdbRating: "",
        imdbVotes: "",
        imdbID: "",
        Type: "",
        DVD: "",
        BoxOffice: "",
        Production: "",
        Website: "",
        Response: "",
    },
    series: {
        Title: "",
        Year: "",
        Rated: "",
        Released: "",
        Runtime: "",
        Genre: "",
        Director: "",
        Writer: "",
        Actors: "",
        Plot: "",
        Language: "",
        Country: "",
        Awards: "",
        Poster: "",
        Ratings: [
            {
                Source: "",
                Value: "",
            }
        ],
        Metascore: "",
        imdbRating: "",
        imdbVotes: "",
        imdbID: "",
        Type: "",
        totalSeasons: "",
        Response: "",
    }
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

export const getMovieOrSeriesById = createAsyncThunk(
    "movies/getById",
    async () => {
        const reduxStore = store.getState()
        const imdbID = reduxStore.movies.imdbID
        const query = queryBuilder({ i: imdbID })
        const response = await fetch(
            "http://www.omdbapi.com/?" + query
        ).then((res) => res.json());
        return response;
    }
);


export const moviesOrSeriesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setImdbID: (state, action: PayloadAction<string>) => {
            state.imdbID = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.list = action.payload;
        });
        builder.addCase(getMovieOrSeriesById.fulfilled, (state, action) => {
            if (action.payload.Type === "series") {
                state.series = action.payload;
                state.movie = initialState.movie
            } else if (action.payload.Type === "movie") {
                state.movie = action.payload;
                state.series = initialState.series
            } else {
                state.movie = initialState.movie
                state.series = initialState.series
            }
        });
    },

},);

export const { setImdbID } = moviesOrSeriesSlice.actions;

export default moviesOrSeriesSlice.reducer;