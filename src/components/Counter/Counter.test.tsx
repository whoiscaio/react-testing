import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

describe('Counter', () => {
  /*
    1 - Counter deve iniciar zerado
    2 - Botão de mais deve somar no counter
    3 - Botão de menos deve subtrair no counter
  */

  it('should start with 0', () => {
    render(<Counter />);

    expect(screen.getByRole('figure').textContent).toEqual('0');
  })

  it('should sum when plus button gets clicked', () => {
    render(<Counter />);

    const oldValue = Number(screen.getByRole('figure').textContent);

    userEvent.click(screen.getByRole('button', { name: 'plus' }));

    expect(Number(screen.getByRole('figure').textContent)).toBeGreaterThan(oldValue);
  })

  it('should subtract when minus button gets clicked', () => {
    render(<Counter />);

    const oldValue = Number(screen.getByRole('figure').textContent);

    userEvent.click(screen.getByRole('button', { name: 'minus' }));

    expect(Number(screen.getByRole('figure').textContent)).toBeLessThan(oldValue);
  })
});