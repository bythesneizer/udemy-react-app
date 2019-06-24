import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {
  // static getDerivedStateFromProps(props,state){
  //   console.log("[Persons.js] getDerivedStateFromProps")
  //   return state
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[Persons.js] shouldComponentUpdate")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("[Persons.js] getSnapshotBeforeUpdate")
    return {message : "snapshot"};
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log("[Persons.js] componentDidUpdate")
    console.log(snapshot)
  }
  
  render(){
    console.log("[Persons.js] rendering...")
    return this.props.persons.map((person, index) => {
      return <Person
      key={person.id}
      click={() => this.props.remove(index)}
      name={person.name}
      change={(event) => this.props.change(event, person.id)} 
      numberOfCats={person.numberOfCats}>This person is {person.age} years old</Person>
    })
  }
} 

export default Persons;