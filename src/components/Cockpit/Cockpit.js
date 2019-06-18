import React from 'react'
import classes from './Cockpit.module.css'

const cockpit = (props) => {
    
    const assignedClasses = []
    let showHide = 'Show'
    let buttonClass = classes.button

    if(props.personsVisible){
        showHide='Hide';
        buttonClass=classes.Red
    }

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red)
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold)
    }
    
    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is a test for building a React application</p>
            <button 
            className={buttonClass}
            onClick={props.visibility}>{showHide} persons</button>
        </div>
    );
}

export default cockpit