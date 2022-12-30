import { useState } from 'react'
import '../../css/navbar.css'
import NavBarLoggedIn from './NavBarLoggedIn'
import NavBarLoggedOut from './NavBarLoggedOut'

const NavBar = () => {
    const [navTransparent, setNavTransparent] = useState(false)
    const toggleNavTransparent = () => {
        if (window.scrollY >= 50) {
            setNavTransparent(true)
        } else {
            setNavTransparent(false)
        }
    }
    window.addEventListener('scroll', toggleNavTransparent)
    const [signedIn, setSignedIn] = useState(false)

    return (
        <nav className={navTransparent ? 'nav active' : 'nav'}>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <div>
                {signedIn ? (
                    <NavBarLoggedIn setSignedIn={setSignedIn} />
                ) : (
                    <NavBarLoggedOut />
                )}
            </div>
        </nav>
    )
}

export default NavBar
