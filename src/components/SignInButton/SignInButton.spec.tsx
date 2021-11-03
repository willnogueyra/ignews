import { render, screen } from "@testing-library/react" // renderiza um componente virtual
import { useSession } from "next-auth/client"
import { SignInButton } from "."
import { mocked } from "ts-jest/utils"


/* como o test unitario é desconexo de todo resto do contexto da aplicação, não retorna nada
ai que entra o jest.mock (imitações) que simula uma ação fictícia
*/

jest.mock("next-auth/client")

describe("SignInButton component", () => {
  // verificar se o link esta renderizando da forma correta
  test('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([null, false]) // utilizando mockReturnValueOnce para apenas o proximo renderização

    render(
     <SignInButton />
    )

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument() // espera encontrar um botão sign in with github   
  })

  it('renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession)

    useSessionMocked.mockReturnValueOnce([
      { user: { name: 'John Doe', email: 'john.doe@example.com'}, expires: 'fake-expires'},
      false
    ])

    render(<SignInButton />)

    expect(screen.getByText('John Doe')).toBeInTheDocument() 
  })
})