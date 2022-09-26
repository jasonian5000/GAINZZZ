import React from 'react'

const PersonalCardInfo = props => {
    return (
        <div>
            <div className="content">
                <br />
                <p>{props?.props.trainer?.description}</p>
            </div>
        </div>
    )
}

export default PersonalCardInfo
