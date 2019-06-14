import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

const rn1 = Math.floor(Math.random() * 20 + 1)
const rn2 = Math.floor(Math.random() * 20 + 1)
const rn3 = Math.floor(Math.random() * 20 + 1)

class App extends Component {
  
  state = {
    persons: [
      { name: 'Jeff', age: 27, numberOfCats: rn1},
      { name: 'Quincy', age: 34, numberOfCats: rn2},
      { name: 'Derek', age: 67, numberOfCats: rn3}
    ],
    personsVisible: false
  }

  togglePersonsVisibilityHandler = () => {
    const showPersons = this.state.personsVisible
    console.log("showPersons bool value is " + showPersons)
    this.setState({
      personsVisible: !showPersons
    })
  }

  removePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render(){
    const style = {
      backgroundColor:'white',
      border:'2px solid blue',
      padding: '5px'
    }

    let persons = null

    if(this.state.personsVisible){
      persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person
          click={this.removePersonHandler.bind(index)}
          name={person.name} 
          numberOfCats={person.numberOfCats}>This person is {person.age} years old</Person>
        })}
     </div>
    );
    }

    return (
      <div className="App">
       <h1>React Application</h1>
       <p>This is a test for building a React application</p>
       <button 
       style={style}
       onClick={this.togglePersonsVisibilityHandler}>Show persons</button>
       {persons}
      </div>
    )
  }
}

export default App;
