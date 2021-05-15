import type { AppProps } from 'next/app';

import '@fontsource/montserrat/700.css';
import '../styles/main.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
