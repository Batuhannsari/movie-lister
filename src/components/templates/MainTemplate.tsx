import React, { useEffect } from "react";
import { Container } from "@mui/material";
import TopNav from "../molecules/TopNav";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/router";
import { getMovieOrSeriesById, getMovies, setImdbID } from "@/redux/slices/movieOrSeriesSlice";
import { setType } from "@/redux/slices/filtersSlicer";

interface Props {
    children: React.ReactNode;
}

function MainTemplate({ children }: Props) {

    const dispatch = useAppDispatch();
    const router = useRouter()
    const movie = useAppSelector((state) => {
        return state.movies.movie;
    });
    const series = useAppSelector((state) => {
        return state.movies.series;
    });

    useEffect(() => {
        if (router.query && router.query.imdbID) {
            dispatch(setImdbID(router.query.imdbID as any))
            dispatch(getMovieOrSeriesById())
        } else if (!router.query.imdbID) {
            dispatch(setImdbID(""))
            dispatch(getMovieOrSeriesById())
        }

    }, [JSON.stringify(Object.values(router.query))])



    return (
        <>
            <TopNav />
            <Container maxWidth="xl" sx={{ mt: 4 }}>
                {children}
            </Container>
        </>
    );
}

export default MainTemplate;