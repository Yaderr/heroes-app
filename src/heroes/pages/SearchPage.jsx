import queryString from 'query-string'
import { useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { HeroList } from "../components/HeroList"
import { favoritesReducer, searchHeroBySuperHero } from '../helpers'
import { HeroCard } from '../components/HeroCard'
import { useEffect, useReducer } from 'react'
import { types } from '../types/types'

const init = () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q='' } = queryString.parse(location.search)

    const { searchText, onInputChange} = useForm({
        searchText: q
    })

    const results = searchHeroBySuperHero(q)

    const onSearchSubmit = (event) => {
        event.preventDefault()

        if(searchText.trim().length <= 1) return 

        navigate(`?q=${searchText}`)        
    }

    const [favState, dispatch] = useReducer(favoritesReducer, [], init)

    const favIds = favState.map(fav => fav.id)

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favState))
    },[favState])
    
    const onClickFav = (heroe, isFav) => {

        let action = {
            payload: heroe
        }

        if(isFav) {
            action.type = types.removeFavorites
        }else {
            action.type = types.addFavorite
        }
        
        dispatch(action)
    }
    
    return (
        <>
            <div className="flex justify-center">
               
                <form data-testid="search-form" className="flex bg-white drop-shadow-lg focus:drop-shadow-xl rounded-md py-2 px-2" onSubmit={onSearchSubmit}>
                    <input autoFocus name="searchText" onChange={onInputChange} value={ searchText } className="py-2 px-2 bg-transparent w-[500px] border-indigo-500 outline-none" placeholder="Buscar un heroe..." type="search" />
                    <button className="w-10 bg-indigo-500 text-white outline-none py-2 px-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </form>
            </div>
            
            <br />

            <div data-testid="default-message" style={{ display: q === ''? null: 'none'}} className="animate__animated animate__fadeIn flex h-[500px] w-full justify-center items-center">
                <span className='font-medium text-2xl text-indigo-500'>Busca un heroe...</span>
            </div>

            <div data-testid="no-heroes-found-message" style={{ display: results.length === 0 && q !== '' ? null : 'none' }} className="animate__animated animate__fadeIn flex h-[500px] w-full justify-center items-center">
                <span className='font-medium text-2xl text-indigo-500 text-center'>Oops <br />No hay heroes</span>
            </div>

            {
                results.map((hero) => (
                    <HeroCard key={hero.id} heroe={hero} isFav={favIds.includes(hero.id)} onClickFav={onClickFav} />
                ))
            }
        </>
    )
}