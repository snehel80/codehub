import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {RecoilRoot} from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
        <Head>
            <title>Code Hub</title>
            <meta name="viewport" content="width-device-width, initial-scale=1" />
            <link rel="icon" href="/codehub.png" />
            <meta name="description" content="web applications that contains leetcode problems and video solutions" />
        </Head>
        <Component {...pageProps} />
    </RecoilRoot>
  )
}
