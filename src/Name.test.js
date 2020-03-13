import React from 'react';
import { render } from '@testing-library/react';
import Name from './Name';

test('renders learn react link', () => {
  const { getByText } = render(<Name />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
