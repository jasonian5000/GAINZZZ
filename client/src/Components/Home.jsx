import React from 'react'
import '../css/navbar.css'
import { userSignOut } from '../actions/supabase_client'

const Home = () => {
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
            <button onClick={() => userSignOut()}>Sign Out</button>
        </div>
    )
}

export default Home
