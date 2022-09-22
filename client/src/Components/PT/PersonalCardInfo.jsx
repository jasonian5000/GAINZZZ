import React from 'react'

const PersonalCardInfo = (props) => {
    console.log(props)
  return (
        <div>
            <div className="content">
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