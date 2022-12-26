import "../styles/global.scss";
import localfont from "@next/font/local";

const bigJohn = localfont({ src: "../fonts/BIG-JOHN.otf" });

export default function App({ Component, pageProps }) {
  return (
    <div className={bigJohn.className}>
      <Component {...pageProps} />
    </div>
  );
}
