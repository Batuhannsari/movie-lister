import store from '@/redux/store'
import CustomThemeProvider from '@/styles/CustomThemeProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import 'dayjs/locale/tr' // load on demand

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CustomThemeProvider>
      <Provider store={store} >
        <Component {...pageProps} />
      </Provider>
    </CustomThemeProvider>
  )
}
