import 'windi.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';


function getLibrary(provider: any): Web3 {
  const library = new Web3(provider);
  return library;
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      {/*
      <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet" />
      */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  </>
);

export default MyApp;
