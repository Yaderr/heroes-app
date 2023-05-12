import { render, screen } from "@testing-library/react"
import { AppRounter } from "../../src/router/AppRouter"
import { AuthContext } from "../../src/auth"
import { MemoryRouter } from "react-router-dom"

describe('AppRoute Tests', () => {
    
    test('debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
            user: null
        }

        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={{authState: contextValue}}>
                    <AppRounter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('LoginPage')).toBeTruthy()
    })

    test('debe mostrar marvelPage si el usuario esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                id: 123,
                name: 'UserName'
            }

        }

        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={{authState: contextValue}}>
                    <AppRounter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        
        expect(screen.getByText('MarvelPage')).toBeTruthy()
    })
})