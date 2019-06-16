import React, {Component} from 'react';
import './App.css';
import ValidateInput from './ValidateInput/ValidateInput';
import Char from './Char/Char'

class App extends Component {
  
  state = {
    characters:[]
  }

  inputValueHandler = (event) => {  
    const userInput = event.target.value
    const characters = userInput.split('')
    this.setState({
      characters: characters
    })
  }

  removeCharacterHandler = (index) => {
    const characters = [...this.state.characters]
    characters.splice(index,1)
    this.setState({
      characters: characters
    })
  }

  render(){
    
    let characters = null

    characters = (
        <div>
          {this.state.characters.map((character, index) => {
            console.log(character)
            return <Char
//            key={character.id}
            click={() => this.removeCharacterHandler(index)}
            char={character}></Char>
          })}
       </div>
      );
    
    
    return (
      <div className="App">
       <h1>React Application</h1>
       <p>This is the app for Section 4 Assignment 1</p>
       <input type='text' onChange={this.inputValueHandler.bind(this)} value={this.state.characters.join('')}/>
       <p>Length of string: {this.state.characters.length}</p>
       <ValidateInput
       length={this.state.characters.length}
       ></ValidateInput>
       {characters}
      </div>
    )
  }
}

export default App;
