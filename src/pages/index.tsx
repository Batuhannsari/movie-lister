import { setSearch } from '@/redux/slices/filtersSlicer';
import { getMovies } from '@/redux/slices/movieSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { debounce } from 'lodash'
import MainTemplate from '@/components/templates/MainTemplate';

export default function Home() {

  const router = useRouter()


  return (
    <>
      <MainTemplate>
        <div>asdfg</div>
      </MainTemplate>
    </>
  )
}
