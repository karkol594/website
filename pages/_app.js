import { useEffect } from "react";
import { polyfill } from "smoothscroll-polyfill";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    polyfill();
  }, []);

  return <Component {...pageProps} />;
}
