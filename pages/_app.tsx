import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/external/styles/global-style'
import { theme } from '../src/external/styles/theme'

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
