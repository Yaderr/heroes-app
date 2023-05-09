import { AuthProvider } from "./auth"
import { AppRounter } from "./router/AppRouter"

export const HeroesApp = () => {
    return (
        <>
            <AuthProvider>
                <AppRounter />
            </AuthProvider>
        </>
    )
}