import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         <button onClick={this.handleIncrement}> Counter</button>
         <input
        type="number"
        value={this.state.input1}
        name ="input1"
        />
        <input
         type="number"
        value={this.state.input2}
        name ="input2"
        />
        <input
        type="number"
        value={this.state.input3}
        name ="input3"
        />
        </p>
      </div>
    );
  }

  handleIncrement=()=>{
this.setState({ input1:this.state.input1 +1 });
this.setState({ input2:this.state.input2 +2 });
this.setState({ input3:this.state.input3 +3 });
console.log(this.state);
  }

  constructor(props){
   super(props);
   this.state={
     input1:1,
     input2:2,
     input3:3
   }
   this.handleIncrement=this.handleIncrement.bind(this);
    }
}

export default App;
