import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '@fontsource/montserrat/700.css';
import '../styles/main.scss';

import store from '../store';

import { fetchEntries } from '../store/entriesSlice';
import { fetchTopics } from '../store/topicsSlice';

[fetchEntries, fetchTopics].forEach((actionCreator) => {
  store.dispatch(actionCreator());
});

const App = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
