import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('renders the heading', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /react boilerplate/i })).toBeInTheDocument();
  });
});
