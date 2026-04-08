import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  it('renders the label', () => {
    render(<Input label="Correo" />);

    expect(screen.getByText('Correo')).toBeInTheDocument();
  });

  it('renders input with provided type', () => {
    render(<Input label="Clave" type="password" />);

    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'password');
  });
});
