import { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {
    
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <>
            <div>
                {
                    heroes.map((heroe) => {
                        return (
                            <HeroCard key={heroe.id} {...heroe} />
                        )
                    })
                }
            </div>
        </>
    )
}