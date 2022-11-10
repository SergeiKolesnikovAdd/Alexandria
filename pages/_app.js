import Head from "next/head";
import "styles/global.style";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Alexandrina</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
