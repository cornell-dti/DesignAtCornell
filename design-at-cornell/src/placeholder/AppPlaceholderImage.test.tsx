import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppPlaceholderImage from './AppPlaceholderImage';

describe('<AppPlaceholderImage />', () => {
  test('it should mount', () => {
    render(<AppPlaceholderImage />);

    const placeholderImage = screen.getByTestId('AppPlaceholderImage');

    expect(placeholderImage).toBeInTheDocument();
  });
});
