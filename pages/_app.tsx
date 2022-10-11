import '../styles/globals.css';
import 'normalize.css/normalize.css';
import type { AppProps } from 'next/app'
import LayoutWithNavbar from '../components/LayoutWithNavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutWithNavbar>
      <Component {...pageProps} />
    </LayoutWithNavbar>
  )
}

export default MyApp
