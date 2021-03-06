import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Boilerplate</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="React w/ Next Boilerplate" />
        <link rel="shortcut icon" href="img/icon-512.png" />
        <link rel="apple-touch-icon" href="img/icon-512.png" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
