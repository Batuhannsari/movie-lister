import React from 'react'
import styles from "./template.module.scss";
import { useAppSelector } from '@/redux/store';


const MoviesCardList = () => {

    const movies = useAppSelector((state) => {
        return state.movies;
    });

    return (
        <>
            {
            }
            <div className={styles.layout}>MoviesCardList</div>
        </>
    )
}

export default MoviesCardList