import React from 'react'

const PersonalCardInfo = (props) => {
    console.log(props)
  return (
      <div>
          <div className="content">
              <p>{props?.props?.trainer?.description}</p>
              <p>Specializations in {props?.props?.trainer?.specialties}</p>
              <p>Rates: {props?.props?.trainer?.rates}</p>
              <p>Client Reviews: </p>
              <p>{props?.props?.trainer?.testimonials}</p>
              <p>{props?.props?.trainer?.test2}</p>
              <p>{props?.props?.trainer?.test3}</p>
              {/* Need to figure out why the above isnt working */}
          </div>
      </div>
  )
}

export default PersonalCardInfo