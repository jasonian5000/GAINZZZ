import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import { LoginPage } from '../Login/LoginPage'
import SignUpPage from '../SignUp/SignUpPage'
import AccountInformation from '../Account Info/AccountInformation'
import PersonalTrainers from '../PT/PersonalTrainers'
import Workout from '../Exercises/Workout'
import {AnimatePresence, motion} from 'framer-motion'
import Exercise from '../Exercises/Exercise'


const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/exercise" element={<Exercise />} />
                <Route path="/login_page" element={<LoginPage />} />
                <Route path="/sign_up" element={<SignUpPage />} />
                <Route
                    path="/account_information"
                    element={<AccountInformation />}
                />
                <Route
                    path="/personal_trainers"
                    element={<PersonalTrainers />}
                />
                <Route path="/workout" element={<Workout />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes