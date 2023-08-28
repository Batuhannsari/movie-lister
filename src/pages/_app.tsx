import { setImdbID } from '@/redux/slices/movieOrSeriesSlice'
import store, { useAppDispatch } from '@/redux/store'
import CustomThemeProvider from '@/styles/CustomThemeProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CustomThemeProvider>
      <Provider store={store} >
        <Component {...pageProps} />
      </Provider>
    </CustomThemeProvider>
  )
}
