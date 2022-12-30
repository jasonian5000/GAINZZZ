import React from 'react'
import { scrollToTop } from '../../actions/scrollToTop'
import { Link } from 'react-router-dom'

export default function NavBarLoggedOut() {
    return (
        <ul className="menu">
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
    )
}
