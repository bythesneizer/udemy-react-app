import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const rn1 = Math.floor(Math.random() * 20 + 1)
const rn2 = Math.floor(Math.random() * 20 + 1)
const rn3 = Math.floor(Math.random() * 20 + 1)

const App = props => {

  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Jeff', age: 27, numberOfCats: rn1},
      { name: 'Quincy', age: 34, numberOfCats: rn2},
      { name: 'Derek', age: 67, numberOfCats: rn3}
    ]
  })

  const changeNameHandler = () => {
    console.log('Button clicked')
    setPersonState({
      persons: [
        { name: 'Clicked', age: 27, numberOfCats: rn1},
        { name: 'Quincy', age: 34, numberOfCats: rn2},
        { name: 'Derek', age: 999, numberOfCats: rn3}
      ]
    })
  }

    return (
      <div className="App">
       <h1>React Application</h1>
       <p>This is a test for building a React application</p>
       <button onClick={changeNameHandler}>Change name</button>
       <Person name={personState.persons[0].name} numberOfCats={personState.persons[0].numberOfCats}>This person is {personState.persons[0].age} years old</Person>
       <Person name={personState.persons[1].name} numberOfCats={personState.persons[1].numberOfCats}>This person is {personState.persons[1].age} years old</Person>
       <Person name={personState.persons[2].name} numberOfCats={personState.persons[2].numberOfCats}>This person is {personState.persons[2].age} years old</Person>
      </div>
    )
  
}

export default App;





