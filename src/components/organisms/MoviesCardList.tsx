import React from 'react'
import styles from "./MoviesCardList.module.scss";
import { useAppSelector } from '@/redux/store';
import MovieCard from '../molecules/MovieCard';
import { Alert, Grid } from '@mui/material';


const MoviesCardList = () => {

    const movies = useAppSelector((state) => {
        return state.movies;
    });

    return (
        <>
            {
                movies.list.Response === "True" ?
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
                    :
                    <div className={styles.notFound}>
                        <Alert variant="outlined" severity="warning">
                            Aradığınızı bulamadık. Lütfen filtreleme seçeneklerini kontrol edip tekrar deneyin
                        </Alert>
                    </div>
            }
        </>
    )
}

export default MoviesCardList