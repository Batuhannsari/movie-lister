import { EpisodesType } from '@/ınterfaces/EpisodesType';
import React from 'react';
import styles from "./EpisodeCard.module.scss";
import { useAppDispatch } from '@/redux/store';
import { getEpisodesDetailById, setImdbIDForEpiosde } from '@/redux/slices/movieOrSeriesSlice';

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