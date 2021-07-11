import { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { reducer } from '../../store';

const storeBasedRender = (
  ui: ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: reducer,
      preloadedState,
    }),
    ...renderOptions
  }: any = {},
) => {
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';

export { storeBasedRender };
