import React from 'react'
import '../../css/homepage.css'

const Features = (props) => {
  return (
      <div className="feature-box">
          <div className="feature-img">
              <img src={props.info.img1} alt="" />
              <img src={props.info.img2} alt="" />
              <img src={props.info.img3} alt="" />
              <img src={props.info.img4} alt="" />
          </div>
          <div className="feature-text">
              <p>{props.info.feature_one}</p>
              <p>{props.info.feature_two}</p>
              <p>{props.info.feature_three}</p>
              <p>{props.info.feature_four}</p>
          </div>
      </div>
  )
}

export default Features
