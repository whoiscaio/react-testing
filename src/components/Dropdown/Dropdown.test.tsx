import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Dropdown from '.';

const options = ['PHP', 'Node', '.NET', 'Java', 'Python'];

describe('Dropdown', () => {

  /*
    1 - O menu dropdown deve iniciar fechado
    2 - Ao clicar no menu dropdown, os itens devem aparecer em tela
    3 - Ao selecionar um item, o dropdown deve fechar e o item deve ser selecionado
  */

  it('should start closed', () => {
    render(<Dropdown options={options}/>)

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    expect(screen.queryByText(options[3])).not.toBeInTheDocument();
    expect(screen.queryByText(options[4])).not.toBeInTheDocument();
  })

  it('should open when the button gets clicked', () => {
    render(<Dropdown options={options} />);

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByText(options[0])).toBeInTheDocument();
    expect(screen.getByText(options[1])).toBeInTheDocument();
    expect(screen.getByText(options[2])).toBeInTheDocument();
    expect(screen.getByText(options[3])).toBeInTheDocument();
    expect(screen.getByText(options[4])).toBeInTheDocument();
  })

  it('should close when an options gets selected', () => {
    render(<Dropdown options={options} />);

    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByText(options[0]));

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    expect(screen.queryByText(options[3])).not.toBeInTheDocument();
    expect(screen.queryByText(options[4])).not.toBeInTheDocument();
    expect(screen.getByRole('figure')).toBe(options[0]);
  })

})