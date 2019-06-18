import React, {Component} from 'react';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
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


    if(this.state.personsVisible){
      persons = (
        <Persons
          persons={this.state.persons}
          remove={this.removePersonHandler}
          change={this.changePersonNameHandler}
        />
    );
    }

    return (
      <StyleRoot>
         <div className={classes.App}>
           <Cockpit
              title={this.props.title} 
              personsVisible={this.state.personsVisible}
              persons={this.state.persons}
              visibility={this.togglePersonsVisibilityHandler}
           />
           {persons}
        </div>
      </StyleRoot>

    )
  }
}

export default Radium(App);
