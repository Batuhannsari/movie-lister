import { Button } from '@mui/material'
import { useRouter } from 'next/router'
function page2() {
  const router = useRouter()

  return (
    <>
      <Button variant="contained" onClick={() => { router.push("page1") }} >page1</Button>
      <Button variant="contained" onClick={() => { router.push("page2") }} >page2</Button>
      <Button variant="contained" onClick={() => { router.push("page3") }} >page3</Button>
    </>
  )
}

export default page2