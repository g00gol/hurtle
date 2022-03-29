import '../styles/globals.css'
import ContextProvider from "../components/contextProvider"

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
