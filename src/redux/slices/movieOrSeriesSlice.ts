import { queryBuilder } from "@/utils/queryBuilder";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import store from "../store";
import { ListType } from "@/ınterfaces/ListType";
import { useRouter } from "next/router";
import { MovieDetailType } from "@/ınterfaces/MovieDetailType";
import { SeriesDetailType } from "@/ınterfaces/SeriesDetailType";
import { SeriesWithSeasonType } from "@/ınterfaces/SeriesWithSeasonType";

interface MoviesOrSliceType {
    list: ListType;
    imdbID: string;
    season: string;
    movie: MovieDetailType;
    series: SeriesDetailType;
    seriesWithSeason: SeriesWithSeasonType;
    imdbIDForEpisode: string
    detailEpisode: any
}

const initialState: MoviesOrSliceType = {
    list: {
        Search: [],
        totalResults: "",
        Response: ""
    },
    imdbID: "",
    season: "",
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
    },
    seriesWithSeason: {
        Title: "",
        Season: "",
        totalSeasons: "",
        Episodes: [],
        Response: "",
    },
    imdbIDForEpisode: "",
    detailEpisode: {}
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

export const getEpisodesBySeason = createAsyncThunk(
    "movies/getAllEpisodesBySeason",
    async () => {
        const reduxStore = store.getState()
        const imdbID = reduxStore.movies.imdbID
        const season = reduxStore.movies.season
        const query = queryBuilder({ i: imdbID, Season: season })
        const response = await fetch(
            "http://www.omdbapi.com/?" + query
        ).then((res) => res.json());
        return response;
    }
);

export const getEpisodesDetailById = createAsyncThunk(
    "movies/getByIdEpisode",
    async () => {
        const reduxStore = store.getState()
        const imdbID = reduxStore.movies.imdbIDForEpisode
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
        setSeason: (state, action: PayloadAction<string>) => {
            state.season = action.payload
        },
        setImdbIDForEpiosde: (state, action: PayloadAction<string>) => {
            state.imdbIDForEpisode = action.payload
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
            state.seriesWithSeason = initialState.seriesWithSeason;
            state.detailEpisode = initialState.detailEpisode
        });
        builder.addCase(getEpisodesBySeason.fulfilled, (state, action) => {
            if (action.payload.Response === "False") {
                state.seriesWithSeason = initialState.seriesWithSeason;
            } else {
                state.seriesWithSeason = action.payload;
            }
            state.detailEpisode = initialState.detailEpisode
        });
        builder.addCase(getEpisodesDetailById.fulfilled, (state, action) => {
            state.detailEpisode = action.payload;
        });
    },

},);

export const { setImdbID, setSeason, setImdbIDForEpiosde } = moviesOrSeriesSlice.actions;

export default moviesOrSeriesSlice.reducer;