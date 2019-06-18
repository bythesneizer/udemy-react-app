import React, {Component} from 'react';
import Person from './Person/Person'
import Radium, {StyleRoot} from 'radium'
import classes from './App.module.css';

class App extends Component {
  
  state = {
    persons: [
      { id: '0001', name: 'Jeff', age: 27, numberOfCats: Math.floor(Math.random() * 20 + 1)},
      { id: '0002', name: 'Quincy', age: 34, numberOfCats: Math.floor(Math.random() * 20 + 1)},
      { id: '0903', name: 'Derek', age: 67, numberOfCats: Math.floor(Math.random() * 20 + 1)}
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

    let persons = null
    let showHide = 'Show'
    let buttonClass = classes.hideButton

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
    showHide='Hide';
    buttonClass=classes.showButton
    }

    const assignedClasses = []

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red)
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold)
    }
    
    return (
      <StyleRoot>
         <div className={classes.App}>
           <h1>React Application</h1>
           <p className={assignedClasses.join(' ')}>This is a test for building a React application</p>
           <button 
           className={buttonClass}
           onClick={this.togglePersonsVisibilityHandler}>{showHide} persons</button>
           {persons}
        </div>
      </StyleRoot>

    )
  }
}

export default Radium(App);
