import React from 'react'

const persons = (props) => (
    props.persons.map((person, index) => {
        return <Person
        key={person.id}
        click={() => this.removePersonHandler(index)}
        name={person.name}
        change={(event) => this.changePersonNameHandler(event, person.id)} 
        numberOfCats={person.numberOfCats}>This person is {person.age} years old</Person>
      })
)