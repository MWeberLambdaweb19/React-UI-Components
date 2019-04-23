import './Display.scss';
import React, {Component} from 'react';

class CalculatorDisplay extends Component {
 
    render() {
        const {result} = this.props;
        return (
            <div className="display">
            <p>{result}</p>
            </div>
        )
    };
};
export default CalculatorDisplay;