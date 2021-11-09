import {
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import { Async } from '.';

test('it renders correctly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello world')).toBeInTheDocument();

  waitFor(() => (
    expect(screen.findByText('Maria')).toBeInTheDocument()
  ));

  waitFor( () => (
    expect( screen.findByText('Juliana')).toBeInTheDocument()
  ));
});

/* o teste nao espera o tempo de renderização de componente com setTimeout no button por exemplo, 
  sendo assim, o teste irá dar erro utilizando getByText.
  Soluções: 
  findByText -> ele esperará o tempo definido no componente e realizará o teste.
  WaitFor -> fica executando o codigo varias vezes ate que o expect passe
  */