import { render, screen, fireEvent } from "@testing-library/react"
import { AuthContext } from "../../../src/auth"
import { NavBar } from "../../../src/ui/components/NavBar"
import { MemoryRouter, useNavigate } from "react-router-dom"

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}))

describe('NavBar Test', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 123,
            name: 'Test Name'
        }
    }

    beforeEach(() => jest.clearAllMocks())

    test('debe mostrar el nombre del usuario logueado', () => {


        render(
            <MemoryRouter>
                <AuthContext.Provider value={{authState: contextValue}} >
                    <NavBar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText(contextValue.user.name)).toBeTruthy()

    })

    test('debe llamar logout y navigate cuando se hace click en el botón', () => {

        const logoutMock = jest.fn()

        render(
            <MemoryRouter>
                <AuthContext.Provider value={{authState: contextValue, logout: logoutMock}} >
                    <NavBar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const logoutButton = screen.getByRole('button')
        
        fireEvent.click(logoutButton)

        expect(logoutMock).toHaveBeenCalled()
        expect(mockUseNavigate).toHaveBeenCalledWith('/login')
    })
})