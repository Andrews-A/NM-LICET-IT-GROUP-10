import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      result: ''
    };
  }

  handleButtonClick = (value) => {
    if (value === '=') {
      try {
        this.setState({
          input: this.state.result,
          result: eval(this.state.result)
        });
      } catch (error) {
        this.setState({
          input: 'Error',
          result: ''
        });
      }
    } else if (value === 'C') {
      this.setState({
        input: '',
        result: ''
      });
    } else {
      this.setState({
        input: this.state.input + value,
        result: this.state.result + value
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <input type="text" value={this.state.input} readOnly />
          <div className="buttons">
            <button onClick={() => this.handleButtonClick('7')}>7</button>
            <button onClick={() => this.handleButtonClick('8')}>8</button>
            <button onClick={() => this.handleButtonClick('9')}>9</button>
            <button onClick={() => this.handleButtonClick('+')}>+</button>
            <button onClick={() => this.handleButtonClick('4')}>4</button>
            <button onClick={() => this.handleButtonClick('5')}>5</button>
            <button onClick={() => this.handleButtonClick('6')}>6</button>
            <button onClick={() => this.handleButtonClick('-')}>-</button>
            <button onClick={() => this.handleButtonClick('1')}>1</button>
            <button onClick={() => this.handleButtonClick('2')}>2</button>
            <button onClick={() => this.handleButtonClick('3')}>3</button>
            <button onClick={() => this.handleButtonClick('*')}>*</button>
            <button onClick={() => this.handleButtonClick('C')}>C</button>
            <button onClick={() => this.handleButtonClick('0')}>0</button>
            <button onClick={() => this.handleButtonClick('=')}>=</button>
            <button onClick={() => this.handleButtonClick('/')}>/</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
