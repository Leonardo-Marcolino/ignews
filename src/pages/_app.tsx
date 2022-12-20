import { AppProps } from 'next/app';
import '../style/global.scss'
import { SessionProvider as NestAuthProvider } from "next-auth/react";
import { Header } from '../components/Header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <NestAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NestAuthProvider>
    </>
  )
}

export default MyApp
