import { getEpisodesDetailById, setImdbIDForEpiosde } from '@/redux/slices/movieOrSeriesSlice';
import { useAppDispatch } from '@/redux/store';
import { EpisodesType } from '@/ınterfaces/EpisodesType';
import React from 'react';
import styles from "./EpisodeCard.module.scss";

interface Iprops {
    data: EpisodesType
}

const EpisodeCard: React.FC<Iprops> = (props) => {

    const dispatch = useAppDispatch()

    return (
        <>
            <div onClick={() => {
                dispatch(setImdbIDForEpiosde(props.data.imdbID))
                dispatch(getEpisodesDetailById())
            }} className={styles.layout}>
                {props.data.Episode + " - " + props.data.Title}
            </div>
        </>
    )
}

export default EpisodeCard