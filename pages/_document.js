/* eslint-disable @next/next/inline-script-id */
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Script
          strategy="lazyOnload"
          src={"https://www.googletagmanager.com/gtag/js?id=G-41BV8P41YT"}
        />

        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-41BV8P41YT', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#155457" />
          <meta name="description" content="The Royal Mint Baharagora" />
          <link rel="apple-touch-icon" href="/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="preload"
            href="/fonts/Berkshire_Swash/BerkshireSwash-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://royalmint.vercel.app/" />
          <meta property="og:title" content="The Royal Mint Baharagora" />
          <meta property="og:description" content="The Royal Mint Baharagora" />
          <meta
            property="og:image"
            content="https://royalmint.vercel.app//logo512.png"
          />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
