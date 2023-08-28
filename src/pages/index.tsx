import { setSearch } from '@/redux/slices/filtersSlicer';
import { getMovies } from '@/redux/slices/movieOrSeriesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { debounce } from 'lodash'
import MainTemplate from '@/components/templates/MainTemplate';
import MoviesCardList from '@/components/organisms/MoviesCardList';
import MovieDetailModal from '@/modals/MovieDetailModal';
import SeriesDetailModal from '@/modals/SeriesDetailModal';

export default function Home() {

  const router = useRouter()
  const dispatch = useAppDispatch()
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
