import '../styles/globals.css'
import { AppWrapper } from '../components/context/state.js'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps}/>
    </AppWrapper>
  )
}

export default MyApp
