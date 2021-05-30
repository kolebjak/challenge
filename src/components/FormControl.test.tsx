import React from 'react';
import { render, screen } from '@testing-library/react';
import FormControl from './FormControl';

describe('FormControl', () => {
  test('should render text input', () => {
    render(<FormControl type="text" label="Text:" onChange={jest.fn} />);
    const input = screen.getByTestId('formControl-input');
    expect(input).toBeInTheDocument();
  });
  test('should render selectbox', () => {
    render(<FormControl type="select" label="Text:" onChange={jest.fn} options={[]}/>);
    const select = screen.getByTestId('formControl-select');
    expect(select).toBeInTheDocument();
  });
})
