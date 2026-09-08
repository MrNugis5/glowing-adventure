import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the expense item', () => {
  render(<App />);
  expect(screen.getByText('Groceries')).toBeDefined();
  expect(screen.getByText('$42.00')).toBeDefined();
  expect(screen.getByText('September')).toBeDefined();
});
