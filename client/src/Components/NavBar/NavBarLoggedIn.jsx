import React from 'react'
import supabase from '../../actions/supabaseClient'
import { scrollToTop } from '../../actions/scrollToTop'
import { Link, useNavigate } from 'react-router-dom'

export default function NavBarLoggedIn(props) {
    const navigate = useNavigate()
    const userSignOut = async () => {
        const { error } = await supabase.auth.signOut()
        console.log(error)
        navigate('/')
    }
    return (
        <ul className="menu">
            <li>
                <Link
                    to="/exercises"
                    style={{ textDecoration: 'none', color: '#ffff' }}
                    onClick={scrollToTop}
                >
                    Search Exercises
                </Link>
            </li>
            <li>
                <Link
                    to="/workouts"
                    style={{ textDecoration: 'none', color: '#ffff' }}
                    onClick={scrollToTop}
                >
                    Create Workout
                </Link>
            </li>
            <li>
                <Link
                    to="/account"
                    style={{ textDecoration: 'none', color: '#ffff' }}
                    onClick={scrollToTop}
                >
                    My Account
                </Link>
            </li>
            <li>
                <Link
                    to="/trainers"
                    style={{ textDecoration: 'none', color: '#ffff' }}
                    onClick={scrollToTop}
                >
                    Personal Trainers
                </Link>
            </li>
            <li>
                <button
                    className="logout"
                    onClick={() => {
                        userSignOut()
                        props.setSignedIn(false)
                        scrollToTop()
                    }}
                >
                    Sign Out
                </button>
            </li>
        </ul>
    )
}
