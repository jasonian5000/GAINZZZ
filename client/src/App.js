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
            if (session) {
                const { user } = session
                console.log(user)
                setLoggedIn(user)
            }
        }
        updateStatus()
    }, [])
    return (
        <>
            <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            <Routes>
                <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
                    <Route path="/exercises" element={<Exercise />} />
                    <Route path="/account" element={<AccountInformation />} />
                    <Route path="/trainers" element={<PersonalTrainers />} />
                    <Route path="/workouts" element={<Workout />} />
                </Route>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn}/>} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
