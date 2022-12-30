import { Footer } from './Components/Main'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import {
    Home,
    LoginPage,
    SignUpPage,
    AccountInformation,
    PersonalTrainers,
    Workout,
    Exercise,
    ErrorPage,
} from './Components/index'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exercises" element={<Exercise />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/account" element={<AccountInformation />} />
                <Route path="/trainers" element={<PersonalTrainers />} />
                <Route path="/workouts" element={<Workout />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
