import React from 'react'
import supabase from '../supabase'
import { scrollToTop } from '../scroll-to-top'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function NavBarLoggedIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userSignOut = async () => {
        await supabase.auth.signOut()
        dispatch({ type: 'SET_SESSION', payload: undefined })
        navigate('/login')
    }
    return (
        <ul className="menu">
            <li>
                <Link
                    to="/exercises"
                    style={{ textDecoration: 'none', color: '#ffff' }}
                    onClick={scrollToTop}
                >
                    Exercises
                </Link>
            </li>
            <li>
                <Link
                    to="/workouts"
                    style={{ textDecoration: 'none', color: '#ffff' }}
                    onClick={scrollToTop}
                >
                    Workouts
                </Link>
            </li>
            <li>
                <Link
                    to="/trainers"
                    style={{ textDecoration: 'none', color: '#ffff' }}
                    onClick={scrollToTop}
                >
                    Trainers
                </Link>
            </li>
            <li>
                <Link
                    to="/account"
                    style={{ textDecoration: 'none', color: '#ffff' }}
                    onClick={scrollToTop}
                >
                    Account
                </Link>
            </li>
            <li>
                <button
                    className="logout"
                    onClick={() => {
                        userSignOut()
                        scrollToTop()
                    }}
                >
                    Sign Out
                </button>
            </li>
        </ul>
    )
}
