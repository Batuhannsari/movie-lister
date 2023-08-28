import { getMovieOrSeriesById, setImdbID, setImdbIDForEpiosde } from "@/redux/slices/movieOrSeriesSlice";
import { useAppDispatch } from "@/redux/store";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import TopNav from "../molecules/TopNav";

interface Props {
    children: React.ReactNode;
}

function MainTemplate({ children }: Props) {

    const dispatch = useAppDispatch();
    const router = useRouter()

    useEffect(() => {
        if (router.query && router.query.imdbID) {
            dispatch(setImdbID(router.query.imdbID as any))
            dispatch(getMovieOrSeriesById())
        } else if (!router.query.imdbID) {
            dispatch(setImdbID(""))
            dispatch(setImdbIDForEpiosde(""))
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