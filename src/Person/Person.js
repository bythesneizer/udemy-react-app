import React from 'react'
import Radium from 'radium'
import classes from './Person.module.css'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
        <div className={classes.Person} style={style}>
            <button onClick={props.click}>Remove</button> 
            <p>{props.name} owns {props.numberOfCats} cats.</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.change} value={props.name}/>
        </div>
    )
}

export default Radium(person)