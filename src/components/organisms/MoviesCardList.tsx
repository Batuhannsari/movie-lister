import React from 'react'
import styles from "./MoviesCardList.module.scss";
import { useAppSelector } from '@/redux/store';
import MovieCard from '../molecules/MovieCard';
import { Grid } from '@mui/material';


const MoviesCardList = () => {

    const movies = useAppSelector((state) => {
        return state.movies;
    });

    return (
        <>
            <Grid className={styles.layout} container spacing={4} >
                {
                    movies.list.Search.map((v, i) => {

                        return (

                            <Grid key={i} item md={3}>
                                <MovieCard data={v} />
                            </Grid>

                        )

                    })
                }
            </Grid>
        </>
    )
}

export default MoviesCardList