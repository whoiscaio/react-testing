import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
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

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    expect(screen.queryByText(options[3])).not.toBeInTheDocument();
    expect(screen.queryByText(options[4])).not.toBeInTheDocument();
  })

})