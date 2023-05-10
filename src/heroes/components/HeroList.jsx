import { useEffect, useMemo, useReducer } from 'react'
import { favoritesReducer, getHeroesByPublisher } from '../helpers/'
import { HeroCard } from './HeroCard'
import { types } from '../types/types'

const init = () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export const HeroList = ({ publisher }) => {
    
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
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
            <div>
                {
                    heroes.map((heroe) => {
                        return (
                            <HeroCard key={heroe.id} heroe={heroe} isFav={favIds.includes(heroe.id)} onClickFav={onClickFav} />
                        )
                    })
                }
                <h1>Favs</h1>
                
                {
                    favState.map((heroe) => {
                        if(heroe.publisher === publisher)  {
                            return (
                                <HeroCard key={heroe.id} heroe={heroe} isFav={favIds.includes(heroe.id)} onClickFav={onClickFav} />
                            )
                        }
                    })
                }
            </div>
        </>
    )
}