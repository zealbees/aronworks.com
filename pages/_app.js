import Layout from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";


// import "../assets/fonts/typography-font/CircularStd-Bold.ttf";
// import "../assets/fonts/typography-font/CircularStd-BoldItalic.ttf";
// import "../assets/fonts/typography-font/CircularStd-Book.ttf";
// import "../assets/fonts/typography-font/CircularStd-BookItalic.ttf";
// import "../assets/fonts/typography-font/CircularStd-Medium.ttf";

// import "../assets/fonts/icon-font/fonts/avasta.ttf";
import "../assets/fonts/icon-font/css/style.css";

// import "../../node_modules/slick-carousel/slick/slick.css";
// import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/aos/dist/aos.css";
// import "../../node_modules/react-day-picker/lib/style.css";

import "../assets/fonts/icon-font/css/style.css";
import "../assets/fonts/typography-font/typo.css";

import "../scss/bootstrap.scss";
import "../scss/main.scss";

const MyApp = ({ Component, pageProps, router }) => {
  if (router.pathname.match(/sign|reset|coming/)) {
    return (
      <GlobalProvider>
        <Layout pageContext={{ layout: "bare" }}>
          <Component {...pageProps} />
        </Layout>
      </GlobalProvider>
    );
  }

  return (
    <GlobalProvider>
      <Layout pageContext={{}}>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
};

export default MyApp;
