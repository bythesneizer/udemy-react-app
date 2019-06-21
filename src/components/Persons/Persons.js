import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {
  render(){
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