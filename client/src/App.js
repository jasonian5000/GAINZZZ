import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import {
    Home,
    LoginPage,
    SignUpPage,
    AccountInformation,
    PersonalTrainers,
    Workout,
    Exercise,
    ErrorPage,
    Footer,
    NavBar,
    supabase,
} from './Components/index'

function App() {
    const [loggedIn, setLoggedIn] = useState(null)
    useEffect(() => {
        const updateStatus = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession()
            const { user } = session
            setLoggedIn(user)
        }
        updateStatus()
    }, [])
    return (
        <>
            <NavBar />
            <Routes>
                <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
                    <Route path="/exercises" element={<Exercise />} />
                    <Route path="/account" element={<AccountInformation />} />
                    <Route path="/trainers" element={<PersonalTrainers />} />
                    <Route path="/workouts" element={<Workout />} />
                </Route>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
