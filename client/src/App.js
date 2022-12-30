import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './features/ui/private-routes'
import { AccountPage, ErrorPage, ExercisesPage, LandingPage, LoginPage, SignupPage, TrainersPage, WorkoutsPage } from './pages'
import supabase from 'features/ui/supabase'
import NavBar from 'features/ui/navbar/navbar.component'
import { Footer } from 'features/ui'


function App() {
    const [loggedIn, setLoggedIn] = useState(null)
    useEffect(() => {
        const updateStatus = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession()
            if (session) {
                const { user } = session
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
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/exercises" element={<ExercisesPage />} />
                    <Route path="/trainers" element={<TrainersPage />} />
                    <Route path="/workouts" element={<WorkoutsPage />} />
                </Route>
                <Route path="/" element={<LandingPage />} />
                <Route
                    path="/login"
                    element={<LoginPage setLoggedIn={setLoggedIn} />}
                />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
