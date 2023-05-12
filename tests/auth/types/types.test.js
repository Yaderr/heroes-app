import { types } from "../../../src/auth/types/types"

describe('types Test', () => {

    test('debe regresar los tyes', () => {
        
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})