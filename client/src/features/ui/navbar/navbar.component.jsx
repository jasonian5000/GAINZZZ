import { useState } from 'react'
import './navbar.css'
import NavBarLoggedIn from './navbar-logged-in.component'
import NavBarLoggedOut from './navbar-logged-out.component'

const NavBar = (props) => {
    const [navTransparent, setNavTransparent] = useState(false)
    const toggleNavTransparent = () => {
        if (window.scrollY >= 50) {
            setNavTransparent(true)
        } else {
            setNavTransparent(false)
        }
    }
    window.addEventListener('scroll', toggleNavTransparent)
    return (
        <nav className={navTransparent ? 'nav active' : 'nav'}>
            <div className="mobileMenu">
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn">
                    <span className="nav-icon"></span>
                </label>
            </div>
            <div>
                {props.loggedIn ? (
                    <NavBarLoggedIn setLoggedIn={props.setLoggedIn} />
                ) : (
                    <NavBarLoggedOut />
                )}
            </div>
        </nav>
    )
}

export default NavBar
