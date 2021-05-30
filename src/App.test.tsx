import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should find users input', async () => {
    render(<App />);
    const input = await screen.findByText(/Users:/i)
    expect(input).toBeInTheDocument();
  });

  test('should find title input', async () => {
    render(<App />);
    const input = await screen.findByText(/Title:/i)
    expect(input).toBeInTheDocument();
  });

  test('should find body input', async () => {
    render(<App />);
    const input = await screen.findByText(/Body:/i)
    expect(input).toBeInTheDocument();
  });
})
