import { render } from "@testing-library/react" // renderiza um componente virtual
import { ActiveLink } from "."

/* como o test unitario é desconexo de todo resto do contexto da aplicação, não retorna nada
ai que entra o jest.mock (imitações) que simula uma ação fictícia
*/
jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

describe("ActiveLink component", () => {
  // verificar se o link esta renderizando da forma correta
  test('active link renders correctly', () => {
    const { getByText , debug } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    debug() // como se fosse um console.log que mostra o que virtualizou no console do vscode
    
    expect(getByText('Home')).toBeInTheDocument() // espera um texto Home que esteja no documento
  })

  //verifica se está com classe active
  test('active link is receiving active class', () => {
    const { getByText , debug } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    debug() // como se fosse um console.log que mostra o que virtualizou no console do vscode
    
    expect(getByText('Home')).toHaveClass('active') // espera um texto Home que tenha classe active
  })
})

