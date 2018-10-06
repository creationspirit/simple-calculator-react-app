import React, { Component } from 'react';
import axios from 'axios';

import Buttons from './components/buttons';
import Display from './components/display';
import {isNumeric, isOperation, trimResult} from './utils/utils';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: null,
      operation: null,
      cachedOperand: null
    };
  }

  handleClick(button) {

    if(isNumeric(button)) {

      if(this.state.value !== null && this.state.value.length >= 16) return;

      if(button === "0" && (this.state.value === null || this.state.value === "0")) return this.setState({value: "0"});

      if(button === "." && this.state.value === null) return this.setState({value: "0."});

      if(this.state.value !== null) {
        this.setState({value: this.state.value + button});
      } else {
        this.setState({value: button});
      } 

    } else if (isOperation(button)) {
        if(this.state.operation === null) {
          if(!this.state.value) {
            this.setState({operation: button});
          } else {
            this.setState({value: null, operation: button, cachedOperand: this.state.value});
          }      
        } else {
          let currentOperand = this.state.value || 0;
          this.fetchResult(this.state.cachedOperand, currentOperand, this.state.operation)
            .then( result => {
              this.setState({value: null, operation: button, cachedOperand: trimResult(result)});
            })
            .catch(e => { console.log("Unable to fetch result from calculator API") });
        }

    } else if (button === "AC") {
      this.setState({value: null, operation: null, cachedOperand: null});

    } else if (button === "C") {
      this.setState({value: null});

    } else if (button === "=") {
      if(this.state.operation && this.state.cachedOperand) {
        let currentOperand = this.state.value || 0;
        this.fetchResult(this.state.cachedOperand, currentOperand, this.state.operation)
          .then( result => {
            this.setState({value: null, operation: null, cachedOperand: trimResult(result)});
          })
          .catch(e => { console.log("Unable to fetch result from calculator API") });
      }
    }
    console.log(this.state);
  }

  async fetchResult(a, b, operation) {
    let encodedOperation = encodeURIComponent(operation);
    let response = await axios(`/api/calculate?a=${a}&b=${b}&op=${encodedOperation}`);
    console.log(response);
    return response.data.result;
  }

  render() {
    return (
      <div className="calculator-container">
        <Display value={this.state.value || this.state.cachedOperand || 0} />
        <Buttons handleClick={button => this.handleClick(button)} />
      </div>
    );
  }
}

export default App;