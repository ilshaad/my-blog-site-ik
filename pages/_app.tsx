import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/customBootstrap.scss";
// import "../styles/globals.scss";
import "../styles/globals.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  <Head>
    <title>Ilshaad Blog</title>
    <meta name="description" content="Ilshaad blog site for web developers" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="apple-mobile-web-app-title" content="Ilshaad blog" />
    <meta name="application-name" content="Ilshaad blog" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
  </Head>;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
