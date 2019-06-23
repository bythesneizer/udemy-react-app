import React, {Component} from 'react'
import classes from './Person.module.css'

class Person extends Component {
    render(){
        console.log("[Person.js] rendering...")
        return (
            <div className={classes.Person}>
                <button onClick={this.props.click}>Remove</button> 
                <p>{this.props.name} owns {this.props.numberOfCats} cats.</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.change} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;