import "../styles/globals.css";
import "../styles/form.css";
import "../styles/contact.css";
import '../styles/maps.css';

import UserContextProvider from "@/context/userContext";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
          <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
          page_path: window.location.pathname,
          });
    `}
      </Script>

    <UserContextProvider>
      <Component {...pageProps} />{" "}
    </UserContextProvider>
    </>
  );
}

export default MyApp;
