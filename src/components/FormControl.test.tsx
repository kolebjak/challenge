import React from 'react';
import { render, screen } from '@testing-library/react';
import FormControl from './FormControl';

describe('FormControl', () => {
  test('should render text input', () => {
    render(<FormControl name="text" type="text" label="Text:" />);
    const input = screen.getByTestId('formControl-input');
    expect(input).toBeInTheDocument();
  });
  test('should render selectbox', () => {
    render(<FormControl name="select" type="select" label="Text:" options={[]}/>);
    const select = screen.getByTestId('formControl-select');
    expect(select).toBeInTheDocument();
  });
})
