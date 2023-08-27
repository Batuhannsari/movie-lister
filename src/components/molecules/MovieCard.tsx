import { MovieType } from '@/ınterfaces/MovieType';
import React from 'react';
import styles from "./MovieCard.module.scss";
import NotFound from "../../assets/notFound.svg"
import NotFound2 from "../../assets/notfound.svg"
import Image from 'next/image';

interface Iprops {
    data: MovieType
}

const MovieCard: React.FC<Iprops> = (props) => {

    console.log('props.data.Poster', props.data.Poster)

    return (
        <>
            <div style={{ backgroundColor: "red", height: "300px" }}>
                {/* <div className={styles.layout} style={{ backgroundImage: props.data.Poster === "N/A" ? NotFound : `url(${props.data.Poster})` }}>
                    MovieCard
                </div> */}
                <div className={styles.layout} style={{ backgroundImage: `${NotFound2}` }}>
                    MovieCards
                </div>
            </div>
        </>
    )
}

export default MovieCard