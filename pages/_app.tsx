import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { EntriesProvider } from '../context/entries';
import {ThemeProvider,CssBaseline } from '@mui/material'
import { lightTheme ,darkTheme} from '../theme';
import { UIProvider } from '../context/ui';







export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
    <UIProvider>
      <ThemeProvider theme={darkTheme} >
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>

    </UIProvider>

    </EntriesProvider>
  )
}
