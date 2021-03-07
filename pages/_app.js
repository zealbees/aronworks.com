import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";
import Head from "next/head";

// import "../node_modules/aos/dist/aos.css";

// import "../assets/fonts/icon-font/css/style.css";
// import "../assets/fonts/typography-font/typo.css";

import "../scss/bootstrap.scss";
import "../scss/main.scss";
import "../scss/custom.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link href="/assets/fonts/typography-font/typo.css" rel="stylesheet" />
        <link href="/assets/fonts/icon-font/css/style.css" rel="stylesheet" />

        <link rel="preconnect" href="https://wchat.in.freshchat.com" />
        <link
          rel="preconnect"
          href="https://assetscdn-wchat.in.freshchat.com"
        />

        {/* <link
          rel="preload"
          href="https://wchat.in.freshchat.com/js/widget.js"
          as="script"
        /> */}

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
