import CustomModal from '@/components/atoms/CustomModal';
import { useAppSelector } from '@/redux/store';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useRouter } from 'next/router';
import styles from "./MovieDetailModal.module.scss";

function MovieDetailModal() {

    const router = useRouter()
    const movie = useAppSelector((state) => {
        return state.movies.movie;
    });

    dayjs.extend(customParseFormat);

    const originalDate = movie.Released;
    const formattedDate = dayjs(originalDate, { format: 'DD MMM YYYY' }).locale('tr').format('DD MMM YYYY');

    return (

        <CustomModal
            title={movie.Title}
            open={true}
            onClose={() => {
                router.replace({ query: {} })
            }}
        >
            <div className={styles.layout}>
                <div className={styles.poster} style={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${movie.Poster === "N/A" ? "/assets/notFound.svg" : movie.Poster})`, }}></div>

                <Grid container className={styles.right} spacing={4} >
                    <Grid item md={12} >
                        <div className={styles.top} >
                            <div>
                                {movie.Year + " yılı / " + movie.Runtime}
                            </div>
                            {
                                movie.Rated &&
                                <div className={styles.rated}>
                                    +18
                                </div>
                            }
                            <div style={{ width: "100%" }} >
                                {movie.Plot}
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={12} >
                        <div className={styles.bottom} >
                            <div className={styles.items}>
                                <div className={styles.title}>Oyuncu Kadrosu:</div>
                                <div>{movie.Actors}</div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.title}>Yönetmen:</div>
                                <div>{movie.Director}</div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.title}>Türler:</div>
                                <div>{movie.Genre}</div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.title}>Dil Seçenekleri:</div>
                                <div>{movie.Language}</div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.title}>Yayınlanma Tarihi:</div>
                                <div>{formattedDate}</div>
                            </div>
                            <div className={styles.items}>
                                <div className={styles.title}>IMDB Puanı:</div>
                                <div>{movie.imdbRating + " (" + movie.imdbVotes + ")"}</div>
                            </div>
                        </div>
                    </Grid>

                </Grid>

            </div>
        </CustomModal>
    );
}

export default MovieDetailModal