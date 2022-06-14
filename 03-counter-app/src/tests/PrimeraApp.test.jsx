/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Tests on <PrimeraApp /> Component', () => {
  test('should show the message "Hello World!"', () => {
    const greet = 'Hello World!';
    const { getByText } = render(<PrimeraApp greeting={greet} />);

    expect(getByText(greet)).toBeInTheDocument();
  });
});
