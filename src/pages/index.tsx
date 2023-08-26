import { getMovies } from '@/redux/slices/movieSlice';
import { useAppDispatch } from '@/redux/store';
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function Home() {

  const router = useRouter()
  const dispatch = useAppDispatch();

  useEffect(() => {
    
    dispatch(getMovies())

  }, [])


  return (
    <>
      <Button variant="contained" onClick={() => { router.push("page1") }} >page1</Button>
      <Button variant="contained" onClick={() => { router.push("page2") }} >page2</Button>
      <Button variant="contained" onClick={() => { router.push("page3") }} >page3</Button>
    </>
  )
}
