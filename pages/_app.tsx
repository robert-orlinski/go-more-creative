import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '@fontsource/montserrat/700.css';
import '../styles/main.scss';

import store from '../store';
import { fetchEntries } from '../store/entriesSlice';

store.dispatch(fetchEntries());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
