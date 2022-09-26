import React from 'react'
import Features from './Features'
import img1 from '../../assets/1.svg'
import img2 from '../../assets/2.svg'
import img3 from '../../assets/3.svg'
import img4 from '../../assets/4.svg'

const Feature = () => {
    let features_text = [
        {
            feature_one:
                'Search for over 2,800 exercises to build a custom workout curated to your own liking',
            img1: img1,
        },
        {
            feature_two:
                'Track your BMI and weight over time when you add your info to your personal account',
            img2: img2,
        },
        {
            feature_three:
                'View each curated workout as a gif and keep track of workout intervals via the Built-In Timer',
            img3: img3,
        },
        {
            feature_four:
                'Connect with our personal trainers! Each trainer has specialties to match your fitness needs!',
            img4: img4,
        },
    ]
    return (
        <div id="features">
            <h1>Why Choose Gainzzz?</h1>
            <div className="feature-container">
                {features_text.map(info => {
                    return (
                        <>
                            <Features info={info} />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Feature
