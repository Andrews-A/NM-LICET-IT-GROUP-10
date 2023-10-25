import React, { Component } from 'react';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: null,
    };
  }

  handleNumberClick = (number) => {
    this.setState((prevState) => ({
      display: prevState.display === '0' ? number : prevState.display + number,
      currentInput: prevState.currentInput + number,
    }));
  };

  handleOperatorClick = (operator) => {
    if (this.state.currentInput !== '') {
      this.setState((prevState) => ({
        operator,
        previousInput: prevState.currentInput,
        currentInput: '',
        display: operator,
      }));
    }
  };

  handleClear = () => {
    this.setState({
      display: '0',
      currentInput: '',
      previousInput: '',
      operator: null,
    });
  };

  handleEquals = () => {
    if (this.state.currentInput !== '' && this.state.operator) {
      const num1 = parseFloat(this.state.previousInput);
      const num2 = parseFloat(this.state.currentInput);
      let result = 0;

      switch (this.state.operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          return;
      }

      this.setState({
        display: result.toString(),
        currentInput: result.toString(),
        previousInput: '',
        operator: null,
      });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => this.handleClear()}>C</button>
            <button onClick={() => this.handleOperatorClick('/')}>/</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('7')}>7</button>
            <button onClick={() => this.handleNumberClick('8')}>8</button>
            <button onClick={() => this.handleNumberClick('9')}>9</button>
            <button onClick={() => this.handleOperatorClick('')}></button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('4')}>4</button>
            <button onClick={() => this.handleNumberClick('5')}>5</button>
            <button onClick={() => this.handleNumberClick('6')}>6</button>
            <button onClick={() => this.handleOperatorClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('1')}>1</button>
            <button onClick={() => this.handleNumberClick('2')}>2</button>
            <button onClick={() => this.handleNumberClick('3')}>3</button>
            <button onClick={() => this.handleOperatorClick('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick('0')}>0</button>
            <button onClick={() => this.handleEquals()}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;