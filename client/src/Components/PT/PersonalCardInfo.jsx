import React from 'react'

const PersonalCardInfo = props => {
    console.log(props)
    return (
        <div>
            <div className="content">
                <br />
                <p>{props?.props.trainer?.description}</p>
                {/* <p>{props?.props?.trainer?.testimonials}</p>
                <p>{props?.props?.trainer?.test2}</p>
                <p>{props?.props?.trainer?.test3}</p> */}
            </div>
        </div>
    )
}

export default PersonalCardInfo
