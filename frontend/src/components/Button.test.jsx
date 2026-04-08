import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
  it('renders button text', () => {
    render(<Button text="Crear hogar" onClick={() => {}} />);

    expect(screen.getByRole('button', { name: 'Crear hogar' })).toBeInTheDocument();
  });

  it('calls handler on click', () => {
    const onClick = vi.fn();
    render(<Button text="Entrar" onClick={onClick} />);

    fireEvent.click(screen.getByRole('button', { name: 'Entrar' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
