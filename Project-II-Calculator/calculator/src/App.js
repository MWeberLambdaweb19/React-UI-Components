import React from 'react';
import './App.scss';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js'
import NumberButton from './components/ButtonComponents/NumberButton.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
// Junk code for pull request
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      result: ""
    };
  }

  onClick = button => {
    if (button === "="){
      this.calculate()
    }
    else if (button === "clear"){
      this.reset()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "" ) + ""
        })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  reset = () => {
    this.setState({
      result: ""
    })
  }

  render () { 
    return (
      <div className="container">
        <div className="calculator-display">
          <CalculatorDisplay result={this.state.result} />
        </div>  
        <div className="calculator-operation"> 
          <NumberButton onClick={this.onClick}/>
          <ActionButton onClick={this.onClick}/>
        </div> 
      </div>
    );
  };
}

export default App;
