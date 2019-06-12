import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.click}>{props.name} owns {props.numberOfCats} cats.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name}/>
        </div>
    )
}

export default person