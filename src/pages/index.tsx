import MoviesCardList from '@/components/organisms/MoviesCardList';
import MainTemplate from '@/components/templates/MainTemplate';
import MovieDetailModal from '@/modals/MovieDetailModal';
import SeriesDetailModal from '@/modals/SeriesDetailModal';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter()
  const movie = useAppSelector((state) => {
    return state.movies.movie;
  });
  const series = useAppSelector((state) => {
    return state.movies.series;
  });

  return (
    <>
      <MainTemplate>
        <MoviesCardList />
        {router.query.imdbID && movie.Type === "movie" &&
          <MovieDetailModal />
        }
        {router.query.imdbID && series.Type === "series" &&
          <SeriesDetailModal />
        }
      </MainTemplate>
    </>
  )
}
