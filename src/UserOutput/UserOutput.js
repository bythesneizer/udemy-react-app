import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return(
        <div className='output'>
            <p>{props.username}</p>
            <p>{props.p2}</p>
        </div>
    )
}

export default userOutput