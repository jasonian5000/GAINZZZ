import { useState } from 'react'
import logo from '../../assets/GAINZZZ.png'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/navbar.css'

const NewNav = () => {
    const [nav, setNav] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        } else {
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <Link to="/" className="logo">
                <img src={logo} alt="" />
            </Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li>
                    <Link
                        to="/"
                        style={{ textDecoration: 'none', color: '#ffff' }}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/exercise_details"
                        style={{ textDecoration: 'none', color: '#ffff' }}
                    >
                        Search Exercises
                    </Link>
                </li>
                <li>
                    <Link
                        to="/account_information"
                        style={{ textDecoration: 'none', color: '#ffff' }}
                    >
                        Account Information
                    </Link>
                </li>
                <li>
                    <Link
                        to="/sign_up"
                        style={{ textDecoration: 'none', color: '#ffff' }}
                    >
                        sign up
                    </Link>{' '}
                </li>
                <li>
                    <Link
                        to="/login_page"
                        style={{ textDecoration: 'none', color: '#ffff' }}
                    >
                        Login
                    </Link>
                </li>
                <li>
                    <Link
                        to="/personal_trainers"
                        style={{ textDecoration: 'none', color: '#ffff' }}
                    >
                        Personal Trainers
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NewNav
