import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";
import Head from "next/head";

import "../assets/fonts/icon-font/css/style.css";

import "../node_modules/aos/dist/aos.css";

import "../assets/fonts/icon-font/css/style.css";
import "../assets/fonts/typography-font/typo.css";

import "../scss/bootstrap.scss";
import "../scss/main.scss";
import "../scss/custom.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <script
          // The defer attribute tells the browser not to wait for the script.
          // Instead, the browser will continue to process the HTML, build DOM.
          // The script loads “in the background”, and then runs when the DOM is fully built.
          defer
          type="text/javascript"
          src="/assets/scripts/fresh-chat.js"
        ></script>
      </Head>
      <GlobalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    </>
  );
};

export default MyApp;
