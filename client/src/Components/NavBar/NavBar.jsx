import { useState, useEffect } from 'react'
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
    let session = null
    const [validSession, setValidSession] = useState(session)
    useEffect(() => {
        let session = localStorage.getItem('sb-ftdnqqojsaaaspvawykt-auth-token')
        setValidSession(session)
        console.log('session')
    }, [session])

    return (
        <nav
            key="navbar"
            id="navbar"
            className={navTransparent ? 'nav active' : 'nav'}
        >
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <div key={validSession}>{validSession ? <NavBarLoggedIn /> : <NavBarLoggedOut />}</div>
        </nav>
    )
}

export default NavBar
