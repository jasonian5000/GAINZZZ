import React from 'react'
import '../../css/homepage.css'

const Features = (props) => {
  console.log(props)
  return (
      <div className='a-box'>
          <div className='a-b-img'>
              <img src={props.image} alt=''/>
          </div>
          <div className='a-b-text'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, odio.</p>
          </div>
    </div>
  )
}

export default Features