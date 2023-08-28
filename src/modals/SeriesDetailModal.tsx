import CustomModal from '@/components/atoms/CustomModal';
import EpisodeCard from '@/components/atoms/EpisodeCard';
import { getEpisodesBySeason, setSeason } from '@/redux/slices/movieOrSeriesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { Button, Divider, Grid } from '@mui/material';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from "./SeriesDetailModal.module.scss";

function SeriesDetailModal() {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const series = useAppSelector((state) => {
        return state.movies.series;
    });
    const seriesWithSeason = useAppSelector((state) => {
        return state.movies.seriesWithSeason;
    });
    const detailEpisode = useAppSelector((state) => {
        return state.movies.detailEpisode;
    });

    const seasons = series.totalSeasons

    dayjs.extend(customParseFormat);

    const originalDate = series.Released;
    const formattedDate = dayjs(originalDate, { format: 'DD MMM YYYY' }).locale('tr').format('DD MMM YYYY');

    useEffect(() => {
        if (Number(seasons) > 0) {
            dispatch(setSeason("1"))
            dispatch(getEpisodesBySeason())
        }

    }, [JSON.stringify(seasons)])

    return (
        <CustomModal
            title={series.Title}
            open={true}
            onClose={() => {
                router.replace({ query: {} })
            }}
        >
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={styles.poster} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${series.Poster === "N/A" ? "/assets/notFound.svg" : series.Poster})`, }}></div>

                    <Grid container className={styles.info} spacing={4} >
                        <Grid item md={12} >
                            <div className={styles.top} >
                                <div>
                                    {series.Year + " yılı / " + series.Runtime}
                                </div>
                                {
                                    series.Rated &&
                                    <div className={styles.rated}>
                                        +18
                                    </div>
                                }
                                <div style={{ width: "100%" }} >
                                    {series.Plot}
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={12} >
                            <div className={styles.bottom} >
                                <div className={styles.items}>
                                    <div className={styles.title}>Oyuncu Kadrosu:</div>
                                    <div>{series.Actors}</div>
                                </div>
                                <div className={styles.items}>
                                    <div className={styles.title}>Yönetmen:</div>
                                    <div>{series.Director}</div>
                                </div>
                                <div className={styles.items}>
                                    <div className={styles.title}>Türler:</div>
                                    <div>{series.Genre}</div>
                                </div>
                                <div className={styles.items}>
                                    <div className={styles.title}>Dil Seçenekleri:</div>
                                    <div>{series.Language}</div>
                                </div>
                                <div className={styles.items}>
                                    <div className={styles.title}>Yayınlanma Tarihi:</div>
                                    <div>{formattedDate}</div>
                                </div>
                                <div className={styles.items}>
                                    <div className={styles.title}>IMDB Puanı:</div>
                                    <div>{series.imdbRating + " (" + series.imdbVotes + ")"}</div>
                                </div>
                            </div>
                        </Grid>

                    </Grid>

                    <div className={styles.seasons} >
                        {Array.from({ length: Number(seasons) }, (_, index) => (
                            <Button
                                className={styles.button}
                                onClick={(e) => {
                                    dispatch(setSeason((index + 1).toString() as string))
                                    dispatch(getEpisodesBySeason())
                                }}
                                variant="outlined"
                                color="secondary"
                                key={`season-${index + 1}`}
                            >
                                Season {index + 1}
                            </Button>
                        ))}
                    </div>

                </div>

                <Divider className={styles.divider} />

                <div className={styles.episodeCards} >
                    {
                        seriesWithSeason &&
                        seriesWithSeason.Response === "True" &&
                        seriesWithSeason.Episodes.length > 0 &&
                        seriesWithSeason.Episodes.map((v, i) => {
                            return (
                                <EpisodeCard key={i} data={v} />
                            )
                        })
                    }
                </div>

                <div className={styles.episodeDetail}>
                    {
                        detailEpisode && detailEpisode.Plot &&
                        <>
                            <Divider className={styles.divider} />
                            <div className={styles.items}>
                                <div className={styles.title}>{detailEpisode.Title + ":"}</div>
                                <div>{detailEpisode.Plot}</div>
                            </div>
                        </>
                    }
                </div>

            </div>

        </CustomModal>
    );
}

export default SeriesDetailModal