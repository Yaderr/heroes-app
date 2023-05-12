import { fireEvent, render, screen } from "@testing-library/react"
import { SearchPage } from "../../../src/heroes/pages/SearchPage"
import { MemoryRouter, useNavigate } from "react-router-dom"

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}))


describe('SerachPage Tests', () => {

    beforeEach(() => jest.clearAllMocks())
    
    test('debe mostrarse correctamente con los valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('debe mostra a batman y en el input el valor del queryString', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole('searchbox')
        expect(input.value).toBe('batman')

        const img = screen.getByTestId('heroe-img')
        expect(img.style.backgroundImage).toContain('batman')

        const defaultMessage = screen.getByTestId('default-message')
        expect(defaultMessage.style.display).toBe('none')

    })

    test('debe mostrar un error si no se encuentra el heroe' , () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        )

        const notFoundHeroAlert = screen.getByTestId('no-heroes-found-message')

        expect(notFoundHeroAlert.style.display).toBeFalsy()
    })

    test('debe llamar el navigate a la pantalla nueva', () => {
        
        render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        const inputSearch = screen.getByRole('searchbox')
        const form = screen.getByTestId('search-form')

        fireEvent.change(inputSearch, { target: { value: 'batman' }})
        fireEvent.submit(form)

        expect(mockUseNavigate).toHaveBeenCalledWith('?q=batman')
    })
})