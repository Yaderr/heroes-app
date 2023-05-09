import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../context"

import queryString from 'query-string'

export const LoginPage = () => {
    
    const navigate = useNavigate()
    const location = useLocation()
    const { authStatea, login } = useContext(AuthContext)

    const { redirect } = queryString.parse(location.search)
    
    const onLogin = () => {

        login('yader')

        navigate(redirect ?? '/', {
            replace: true
        })
    }

    return (
        <>
            <h2 className="text-md">LoginPage</h2>
            <button onClick={ onLogin}>Login</button>
        </>
    )
}