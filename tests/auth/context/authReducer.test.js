import { authReducer } from "../../../src/auth/context"
import { types } from "../../../src/auth/types/types"

describe('authReducer Test', () => {

    const initialState = {
        logged: false,
        user: null
    }

    test('debe retornar el estado por defecto', () => {
        
        const state = authReducer(initialState, {})

        expect(state).toStrictEqual(initialState)
    })

    test('debe de (login) llamar el login autenticar y establecer el user', () => {
        
        const user = {
            id: 100,
            name: 'userTest01'
        }

        const action = {
            type: types.login,
            payload: user
        }

        const state = authReducer(initialState, action)

        expect(state.logged).toBeTruthy()
        expect(state.user).toStrictEqual(user)
    })

    test('debe de (logout) borrar el name del usuario y logged en false', () => {

        const user = {
            id: 100,
            name: 'userTest01'
        }

        const loggedInState = {
            logged: true,
            user
        }

        const action = {
            type: types.logout
        }

        const state = authReducer(loggedInState, action)
        
        expect(state).toStrictEqual({ logged: false })

    })
    
})