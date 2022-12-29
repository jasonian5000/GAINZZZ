import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../css/navbar.css'
import checkToken from '../../actions/checkToken'
import userSignOut from '../../actions/userSignOut'
import { useEffect } from 'react'
import { scrollToTop } from '../../actions/scrollToTop'

const NewNav = () => {
    const navigate = useNavigate()
    const [navTransparent, setNavTransparent] = useState(false)
    const toggleNavTransparent = () => {
        if (window.scrollY >= 50) {
            setNavTransparent(true)
        } else {
            setNavTransparent(false)
        }
    }
    window.addEventListener('scroll', toggleNavTransparent)
    const tokenState = checkToken()
    const [loggedIn, setLoggedIn] = useState(tokenState)
    useEffect(() => {
        setLoggedIn(tokenState)
    }, [tokenState])
    return (
        <nav
            key={String(loggedIn)}
            id="navbar"
            className={navTransparent ? 'nav active' : 'nav'}
        >
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul
                className="menu"
                style={{ display: loggedIn ? 'none' : 'auto' }}
            >
                <li>
                    <Link to="/" onClick={scrollToTop}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/sign_up"
                        style={{ textDecoration: 'none', color: '#ffff' }}
                        onClick={scrollToTop}
                    >
                        sign up
                    </Link>
                </li>
                <li>
                    <Link
                        to="/login_page"
                        style={{ textDecoration: 'none', color: '#ffff' }}
                        onClick={scrollToTop}
                    >
                        Login
                    </Link>
                </li>
            </ul>
            <ul
                className="menu"
                style={{ display: loggedIn ? 'auto' : 'none' }}
            >
                <li>
                    <Link
                        to="/exercise"
                        style={{ textDecoration: 'none', color: '#ffff' }}
                        onClick={scrollToTop}
                    >
                        Search Exercises
                    </Link>
                </li>
                <li>
                    <Link
                        to="/workout"
                        style={{ textDecoration: 'none', color: '#ffff' }}
                        onClick={scrollToTop}
                    >
                        Create Workout
                    </Link>
                </li>
                <li>
                    <Link
                        to="/account_information"
                        style={{ textDecoration: 'none', color: '#ffff' }}
                        onClick={scrollToTop}
                    >
                        My Account
                    </Link>
                </li>
                <li>
                    <Link
                        to="/personal_trainers"
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
                            userSignOut(navigate)
                            scrollToTop()
                        }}
                    >
                        Sign Out
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NewNav
