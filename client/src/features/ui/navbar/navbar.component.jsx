import { useEffect, useState } from 'react'
import './navbar.css'
import NavBarLoggedIn from './navbar-logged-in.component'
import NavBarLoggedOut from './navbar-logged-out.component'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const session = useSelector(state => state.user.session)
    const [validSession, setValidSession] = useState(session)
    const [navTransparent, setNavTransparent] = useState(false)
    const toggleNavTransparent = () => {
        if (window.scrollY >= 50) {
            setNavTransparent(true)
        } else {
            setNavTransparent(false)
        }
    }
    window.addEventListener('scroll', toggleNavTransparent)
    useEffect(() => {
      setValidSession(session)
      console.log("navbar state", session)
    }, [session])
    
    return (
        <nav className={navTransparent ? 'nav active' : 'nav'}>
            <div className="mobileMenu">
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn">
                    <span className="nav-icon"></span>
                </label>
            </div>
            <div>
                {validSession ? (
                    <NavBarLoggedIn />
                ) : (
                    <NavBarLoggedOut />
                )}
            </div>
        </nav>
    )
}

export default NavBar
