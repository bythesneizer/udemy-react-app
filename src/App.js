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
    ]
  }

  onClickHandler = (newName) => {
    console.log('Button clicked')
    this.setState({
      persons: [
        { name: newName, age: 27, numberOfCats: rn1},
        { name: 'Quincy', age: 34, numberOfCats: rn2},
        { name: 'Derek', age: 67, numberOfCats: rn3}
      ]
    })
  }

  changeNameHandler = (event) => {
    console.log('Button clicked')
    this.setState({
      persons: [
        { name: 'Jeff', age: 27, numberOfCats: rn1},
        { name: event.target.value, age: 34, numberOfCats: rn2},
        { name: 'Derek', age: 67, numberOfCats: rn3}
      ]
    })
  }

  render(){
    return (
      <div className="App">
       <h1>React Application</h1>
       <p>This is a test for building a React application</p>
       <button onClick={this.onClickHandler.bind(this, 'Clicked')}>Change name</button>
       <Person 
          name={this.state.persons[0].name} 
          numberOfCats={this.state.persons[0].numberOfCats}
          click={this.onClickHandler.bind(this, 'Jeff')}
          >This person is {this.state.persons[0].age} years old</Person>
       <Person 
          name={this.state.persons[1].name} 
          numberOfCats={this.state.persons[1].numberOfCats}
          change={this.changeNameHandler}
          >This person is {this.state.persons[1].age} years old</Person>
       <Person 
          name={this.state.persons[2].name} 
          numberOfCats={this.state.persons[2].numberOfCats}
          >This person is {this.state.persons[2].age} years old</Person>
      </div>
    )
  }
}

export default App;
