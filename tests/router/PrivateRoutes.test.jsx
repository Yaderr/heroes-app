import { render, screen } from "@testing-library/react"
import { AuthContext, LoginPage } from "../../src/auth"
import { PrivateRoutes } from "../../src/router/PrivateRoutes"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { PublicRoutes } from "../../src/router/PublicRoutes"

describe('PrivateRoutes Tests', () => {

    test('debe retornar al login si no esta autenticado', () => {

        const contextValue = {
            logged: false,
            user: null
        }

        render(
            <AuthContext.Provider value={{ authState: contextValue}}> 
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route path="/*" element={
                            <PrivateRoutes>
                                <h1>Private route</h1>
                            </PrivateRoutes>
                        } />
                        <Route path="/login" element={<h1>Login page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Login page')).toBeTruthy()
    })

    test('debe retonar a la ruta privada si el usuario esta autenticado', () => {
        
        const lastPath = '/hero/spider-man'
        const contextValue = {
            logged: true,
            user: null
        }

        render(
            <AuthContext.Provider value={{ authState: contextValue}}> 
                <MemoryRouter initialEntries={['/']}>
                    <Routes>
                        <Route path="/*" element={
                            <PrivateRoutes>
                                <h1>Private route</h1>
                            </PrivateRoutes>
                        } />
                        <Route path="/login" element={<h1>Login page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Private route')).toBeTruthy()
    })
    
})