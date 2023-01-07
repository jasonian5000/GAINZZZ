import React from 'react'
import { scrollToTop } from '../scroll-to-top'
import { Link, useNavigate } from 'react-router-dom'
import { useSession } from 'features/users/sessionContext'

export default function NavBarLoggedIn() {
    const navigate = useNavigate()
    const { logout, setSession, setUser } = useSession()
    const userSignOut = async () => {
        logout()
        setSession(false)
        setUser(false)
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
                    to="/"
                    style={{ textDecoration: 'none', color: '#ffff' }}
                    onClick={scrollToTop}
                >
                    Dashboard
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
