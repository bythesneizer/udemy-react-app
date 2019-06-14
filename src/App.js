import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

const rn1 = Math.floor(Math.random() * 20 + 1)
const rn2 = Math.floor(Math.random() * 20 + 1)
const rn3 = Math.floor(Math.random() * 20 + 1)

class App extends Component {
  
  state = {
    persons: [
      { id: '0001', name: 'Jeff', age: 27, numberOfCats: rn1},
      { id: '0002', name: 'Quincy', age: 34, numberOfCats: rn2},
      { id: '0903', name: 'Derek', age: 67, numberOfCats: rn3}
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

  changePersonNameHandler = (event,id) => {
    //Get index of person
    const personIndex = this.state.persons.findIndex(p => {return p.id===id})
    //Make copy of selected person 
    const person = {...this.state.persons[personIndex]}
    //Change name to value entered
    person.name = event.target.value
    //Make copy of persons array 
    const persons = [...this.state.persons]
    
    persons[personIndex]=person
    
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
          key={person.id}
          click={() => this.removePersonHandler(index)}
          name={person.name}
          change={(event) => this.changePersonNameHandler(event, person.id)} 
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
