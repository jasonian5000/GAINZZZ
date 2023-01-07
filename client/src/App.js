import { Route, Routes } from 'react-router-dom'
import SessionRoute from './features/ui/session-route'
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
import UserRoute from './features/ui/user-route'
import Search from 'pages/search.page'
import { UserProvider } from 'features/users/userContext'

function App() {
    return (
        <>
            <UserProvider>
                <NavBar />
                <Routes>
                    <Route element={<SessionRoute />}>
                        <Route element={<UserRoute />}>
                            <Route path="/" element={<DashboardPage />} />
                            <Route path="/account" element={<AccountPage />} />
                            <Route
                                path="/exercises"
                                element={<ExercisesPage />}
                            />
                            <Route path="/search" element={<Search />} />
                            <Route
                                path="/trainers"
                                element={<TrainersPage />}
                            />
                            <Route
                                path="/workouts"
                                element={<WorkoutsPage />}
                            />
                        </Route>
                        <Route path="/get_started" element={<GetStarted />} />
                    </Route>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </UserProvider>
        </>
    )
}

export default App
