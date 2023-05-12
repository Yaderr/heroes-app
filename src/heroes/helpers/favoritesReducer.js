import { types } from "../types/types"

export const favoritesReducer = (state = [], action) => {
    
    switch(action.type) {

        case types.addFavorite:
            return [...state, action.payload]
        case types.removeFavorites:
            return state.filter((hero) => hero.id !== action.payload.id)
        case types.myFavorites:
            return state
        default:
            return state
    }
}