import { Route, Routes } from 'react-router-dom'
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
import NavBar from 'features/ui/navbar/navbar.component'

function App() {  
    return (
        <>
            <NavBar  />
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/exercises" element={<ExercisesPage />} />
                    <Route path="/trainers" element={<TrainersPage />} />
                    <Route path="/workouts" element={<WorkoutsPage />} />
                </Route>
                <Route
                    path="/login"
                    element={<LoginPage />}
                />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default App
