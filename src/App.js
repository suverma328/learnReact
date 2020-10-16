import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    userName: "Captain America"
  }

  usernameChangedHandler = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  render() {
    return(
      <div className="App">
      <h1>Assignment 1</h1>
      <UserInput changed={this.usernameChangedHandler} userName={this.state.userName}/>
      <UserOutput  userName={this.state.userName}/>
      <UserOutput userName="Ironman"/>
      <UserOutput userName="Thor"/>
    </div>
    );
    } 
}

export default App;
