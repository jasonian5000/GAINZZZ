import React from 'react'
import sendSignUp from '../../actions/signUp'
import '../../css/signUpForm.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

const SignUpPage = () => {
    return (
        <>
            <form className="signUpForm">
                <div className="form-container">
                <h1>Join GAINZZZ Now! </h1>
                    <div className="firstNameContainer">
                        <input
                            className="firstNameInput"
                            name="firstName"
                            type="text"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div className="lastNameContainer">
                        <input
                            className="lastNameInput"
                            name="lastName"
                            type="text"
                            placeholder="Enter your last name"
                        />
                    </div>
                    <div className="usernameContainer">
                        <input
                            className="usernameInput"
                            name="username"
                            type="text"
                            placeholder="username"
                        />
                    </div>
                    <div className="emailContainer">
                        <input
                            className="emailInput"
                            name="email"
                            type="email"
                            placeholder="email"
                        />
                    </div>
                    <div className="passwordContainer">
                        <input
                            id="passwordInput"
                            name="password"
                            type="password"
                            placeholder="Must contain 6+ characters"
                        />
                    </div>
                        <div className="buttonContainer">
                            <button 
                            className='registerButton'
                            onClick={e => sendSignUp(e)}>
                                Register
                            </button>
                        </div>
                    <div className="iconList">
                        <FacebookIcon id="icon" />
                        <InstagramIcon id="icon" />
                        <TwitterIcon id="icon" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default SignUpPage
