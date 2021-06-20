/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store';
import Routes from '../Routes';

test('renders login form', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Routes />
    </Provider>,
  );

  expect(getByText(/Login/i)).toBeInTheDocument();
});
