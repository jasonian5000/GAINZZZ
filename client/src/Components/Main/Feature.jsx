import React from 'react'
import img1 from '../../assets/1.svg'
import img2 from '../../assets/2.svg'
import img3 from '../../assets/3.svg'
import img4 from '../../assets/4.svg'
import '../../css/homepage.css'

const Feature = () => {
    return (
        <div id="features">
            <h1>Why Choose Gainzzz?</h1>
            <div className="feature-container">
                <div className="feature-box">
                    <div className="feature-img">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </div>
                    <div className="feature-text">
                        <p>
                            Search for over 2,800 exercises to build a custom
                            workout curated to your own liking
                        </p>
                        <p>
                            Track your BMI and weight over time when you add
                            your info to your personal account
                        </p>
                        <p>
                            View each curated workout as a gif and keep track of
                            workout intervals via the Built-In Timer
                        </p>
                        <p>
                            Connect with our personal trainers! Each trainer has
                            specialties to match your fitness needs!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature
