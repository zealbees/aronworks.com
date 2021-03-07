import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Preconnect - establish network connections early and increase performance */}
          <link rel="preconnect" href="https://wchat.in.freshchat.com" />
          <link
            rel="preconnect"
            href="https://assetscdn-wchat.in.freshchat.com"
          />

          {/* Preload Script */}
          <link
            rel="preload"
            href="https://wchat.in.freshchat.com/js/widget.js"
            as="script"
          />

          {/* Preload CSS */}
          <link
            rel="preload"
            href="/assets/fonts/typography-font/typo.css"
            as="style"
          />
          <link
            rel="preload"
            href="/assets/fonts/icon-font/css/style.css"
            as="style"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <link
            href="/assets/fonts/typography-font/typo.css"
            rel="stylesheet"
          />
          <link href="/assets/fonts/icon-font/css/style.css" rel="stylesheet" />

          <script
            // The defer attribute tells the browser not to wait for the script.
            // Instead, the browser will continue to process the HTML, build DOM.
            // The script loads “in the background”, and then runs when the DOM is fully built.
            defer
            type="text/javascript"
            src="/assets/scripts/fresh-chat.js"
          ></script>
        </body>
      </Html>
    );
  }
}
