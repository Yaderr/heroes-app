import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth"
import { PublicRoutes } from "../../src/router/PublicRoutes"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('PublicRoutes Test', () => {

    test('debe retornar el children si no esta autenticado', () => {

        const contextValue = {
            logged: false,
            user: null
        }
        
        render(
            <AuthContext.Provider value={{authState: contextValue}}>
                <PublicRoutes>
                    <h1>Public Route Test</h1>
                </PublicRoutes>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Public Route Test'))
    })

    test('debe navegar a la ruta si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                id: 11212,
                name: 'Yaderr'
            }
        }
        
        render(
            <AuthContext.Provider value={{authState: contextValue}}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="/login" element={
                            <PublicRoutes>
                                <h1>TEST Public Login page</h1>
                            </PublicRoutes>
                        } />
                        <Route path="/" element={<h1>TEST Marvel page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        
        expect(screen.getByText('TEST Marvel page')).toBeTruthy()
    })
})