import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const { getAllByText } = render(<App />);
  const cells = getAllByText('+');
  cells.forEach(cell => expect(cell).toBeInTheDocument());
});
