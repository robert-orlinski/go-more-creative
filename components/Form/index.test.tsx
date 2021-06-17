import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';

import store from '../../store';
import { Form } from '.';

describe('render', () => {
  it('renders component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );
    expect(getByText('first idea:')).toBeInTheDocument();
  });
});
