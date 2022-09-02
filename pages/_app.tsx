import 'windi.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      {/*
      <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet" />
      */}
      <link rel="icon" href="/cat-dao.svg" />
      <script async src="https://tally.so/widgets/embed.js" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
