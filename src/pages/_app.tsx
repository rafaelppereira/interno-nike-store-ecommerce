import { Header } from '../components/Header';
import { Toaster } from 'react-hot-toast';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Toaster 
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default MyApp
