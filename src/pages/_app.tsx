import store from '@/redux/store'
import CustomThemeProvider from '@/styles/CustomThemeProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
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
