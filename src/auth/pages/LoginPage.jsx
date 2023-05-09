import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    
    const navigate = useNavigate()
    
    const onLogin = () => {
        navigate('/', {
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