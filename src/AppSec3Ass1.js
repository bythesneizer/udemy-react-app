import React, {Component} from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
import './App.css';

class App extends Component {
  
  state = {
    username: 'InitialUsername'
  }

  usernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render(){

    return (
      <div className="App">
       <h1>React Application</h1>
       <p>This is the app for Section 3 Assignment 1</p>
       <UserInput
          change={this.usernameHandler}
          username={this.state.username}
       ></UserInput>
       <UserOutput 
          username={this.state.username}
          p2='Pargraph for UserOutput Componenent'
        ></UserOutput>
        <UserOutput 
          username={this.state.username}
          p2='Pargraph for UserOutput Componenent'
        ></UserOutput>
      </div>
    )
  }
}

export default App;
