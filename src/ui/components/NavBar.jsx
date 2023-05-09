import { useContext } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth"

export const NavBar = () => {

    const navigate = useNavigate()
    const { authState, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
        //navigate('/login')
    }

    return (
        <>
            <nav className="bg-white flex px-10 py-5 shadow-md">
                <div className="py-2 text-xl font-bold text-indigo-500 uppercase min-w-[140px]">
                    <Link className="" to="/marvel">Heroes App</Link>
                </div>
                <div className="flex justify-center w-[100%]">
                    <ul className="w-[400px] flex space-x-5">
                        <li className="w-full">
                            <NavLink className="nav-button" to="/marvel">Marvel</NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink className="nav-button" to="/dc">DC</NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink className="nav-button" to="/search">Search</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <span className="text-indigo-500 font-medium capitalize">{ authState?.user?.name }</span>
                    <button onClick={ handleLogout } className="flex space-x-1 border-transparent font-medium py-2 px-2 border-2 rounded-md hover:border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                        <span>Logout</span>
                    </button>
                </div>
            </nav>
        </>
    )
}