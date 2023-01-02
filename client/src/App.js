import { useState, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserIDContext } from 'UserIDContext'
import PrivateRoutes from './features/ui/private-routes'
import {
    AccountPage,
    ErrorPage,
    ExercisesPage,
    LoginPage,
    SignupPage,
    TrainersPage,
    WorkoutsPage,
    HomePage,
} from './pages'
import supabase from 'features/ui/supabase'
import NavBar from 'features/ui/navbar/navbar.component'
import { Footer } from 'features/ui'

function App() {
    const userID = useContext(UserIDContext)
    const updateUser = async () => {
        const {
            data: { session },
        } = await supabase.auth.getSession()
        if (session) {
            const { user } = await session
            console.log(user)
            return user
        }
        return null
    }
    const [user, setUser] = useState(updateUser())
    return (
        <UserIDContext.Provider value={userID}>
            <NavBar user={user} setUser={setUser} />
            <Routes>
                <Route element={<PrivateRoutes user={user} />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/exercises" element={<ExercisesPage />} />
                    <Route path="/trainers" element={<TrainersPage />} />
                    <Route path="/workouts" element={<WorkoutsPage />} />
                </Route>
                <Route
                    path="/login"
                    element={<LoginPage setUser={setUser} />}
                />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </UserIDContext.Provider>
    )
}

export default App
