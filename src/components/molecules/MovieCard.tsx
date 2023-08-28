import { MovieType } from '@/ınterfaces/MovieType';
import { useRouter } from 'next/router';
import React from 'react';
import styles from "./MovieCard.module.scss";

interface Iprops {
    data: MovieType
}

const MovieCard: React.FC<Iprops> = (props) => {
    const router = useRouter()

    return (
        <>
            <div onClick={() => {
                router.replace({
                    query: {
                        imdbID: props.data.imdbID
                    }
                })
            }} className={styles.layout} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.data.Poster === "N/A" ? "/assets/notFound.svg" : props.data.Poster})`, }}>
                <div className={styles.top} >{props.data.Title}</div>
            </div>
        </>
    )
}

export default MovieCard