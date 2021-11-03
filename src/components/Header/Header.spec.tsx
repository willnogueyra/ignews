import { render } from "@testing-library/react" // renderiza um componente virtual
import { Header } from "."

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

jest.mock("next-auth/client", () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

describe("Header component", () => {
  // verificar se o link esta renderizando da forma correta
  test('active link renders correctly', () => {
    const { getByText , debug } = render(
      <Header />
    )
    
    expect(getByText('Home')).toBeInTheDocument() // espera um texto Home que esteja no documento
    expect(getByText('Posts')).toBeInTheDocument()
  })
})