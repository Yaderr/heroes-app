import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom"

export const PrivateRoutes = ({ children }) => {
    const { authState } = useContext(AuthContext)

    const { pathname, search } = useLocation()

    const lastPath = pathname + search

    return authState.logged ? children : <Navigate to={`/login?redirect=${lastPath}`} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
}