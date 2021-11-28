import 'windi.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { UseWalletProvider } from 'use-wallet'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      {/*
      <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet" />
      */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <UseWalletProvider>
      <Component {...pageProps} />
    </UseWalletProvider>
  </>
);

export default MyApp;
