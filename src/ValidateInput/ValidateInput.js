import React from 'react'

const validateInput = (props) => {
    return(
        <div>
        {props.length < 5 ?
            <p>Text too short</p>:
            <p>Text long enough</p>
        }
        </div>        
    )
}

export default validateInput