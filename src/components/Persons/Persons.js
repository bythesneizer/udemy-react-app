import React from 'react'
import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => {
        return <Person
        key={person.id}
        click={() => props.remove(index)}
        name={person.name}
        change={(event) => props.change(event, person.id)} 
        numberOfCats={person.numberOfCats}>This person is {person.age} years old</Person>
      })

export default persons