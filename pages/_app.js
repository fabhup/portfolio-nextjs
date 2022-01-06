import '@/styles/index.css'
import useColorTheme from 'use-color-theme'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
    const colorTheme = useColorTheme()

    useEffect(() => {
        colorTheme.set('light-theme')
    }, [])

    return <Component {...pageProps} />
}

export default MyApp
