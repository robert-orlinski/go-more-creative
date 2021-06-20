import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as SessionProvider, getSession } from 'next-auth/client';

import '@fontsource/montserrat/700.css';
import '../styles/main.scss';

import store from '../store';

import { fetchEntries } from '../store/entriesSlice';
import { fetchTopics } from '../store/topicsSlice';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const setupStore = async () => {
      const session = await getSession();

      if (session) {
        [fetchEntries, fetchTopics].forEach((actionCreator) => {
          store.dispatch(actionCreator());
        });
      }
    };

    setupStore();
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
  );
};

export default App;
