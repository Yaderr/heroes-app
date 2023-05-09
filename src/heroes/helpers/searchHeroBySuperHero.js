import { heroes } from "../data/heroes"

export const searchHeroBySuperHero = (query) => {

    const heroName = query.toLocaleLowerCase().trim()

    if(heroName.length === 0) return []
    return heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(heroName))
}