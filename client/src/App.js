import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './features/ui/private-route'
import {
    AccountPage,
    ErrorPage,
    ExercisesPage,
    LoginPage,
    SignupPage,
    TrainersPage,
    WorkoutsPage,
    DashboardPage,
} from './pages'
import NavBar from 'features/ui/navbar/navbar.component'
import GetStarted from 'pages/get-started.page'
import NewUser from './features/ui/new-user-route'
import Search from 'pages/search.page'

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route element={<NewUser />}>
                        <Route path="/" element={<DashboardPage />} />
                        <Route path="/account" element={<AccountPage />} />
                        <Route path="/exercises" element={<ExercisesPage />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/trainers" element={<TrainersPage />} />
                        <Route path="/workouts" element={<WorkoutsPage />} />
                    </Route>
                    <Route path="/get_started" element={<GetStarted />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    )
}

export default App
