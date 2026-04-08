import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Input from './Input';

describe('Input', () => {
  it('renders the label', () => {
    render(<Input label="Correo" />);

    expect(screen.getByText('Correo')).toBeInTheDocument();
  });

  it('renders input with provided type', () => {
    render(<Input label="Correo" type="email" />);

    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
  });
});
