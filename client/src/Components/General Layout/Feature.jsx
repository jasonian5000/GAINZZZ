import React from 'react'
import Features from './Features'
import img1 from '../../assets/1.svg'
import img2 from '../../assets/2.svg'
import img3 from '../../assets/3.svg'
import img4 from '../../assets/4.svg'


const Feature = () => {
  return (
      <div id='features'>
          <h1>Why Choose Gainzzz?</h1>
          <div className='a-container'>
              <Features image={img1} title='' />
              <Features image={img2} title='' />
              <Features image={img3} title='' />
              <Features image={img4} title='' />
          </div>
    </div>
  )
}

export default Feature