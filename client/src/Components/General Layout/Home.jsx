import React from 'react'
import '../../css/navbar.css'
import "../../css/homePage.css"
import { userSignOut } from '../../actions/supabase_client'
import {useNavigate} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    return (
        <div id="main">
            <div className="name">
                <h2>READY TO START YOUR JOURNEY?</h2>
                <h1>
                    Start <span>TODAY</span>
                </h1>
                <p className="details">
                    Sweat. Shower. Repeat. Gain a new lifestyle and body
                    alongside thousands of users.
                </p>
                <div className="header-btns">
                    <a href="/login_page" className="header-btn">
                        Sign up
                    </a>
                </div>
            </div>
            <button className='signOutButton' onClick={() => userSignOut(navigate)}>Sign Out</button>
        </div>
    )
}

export default Home
