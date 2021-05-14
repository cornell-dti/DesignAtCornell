import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('it should mount', () => {
  const { getByText } = render(<App />);

  const app = screen.getByTestId('App');

  expect(app).toBeInTheDocument();
});
