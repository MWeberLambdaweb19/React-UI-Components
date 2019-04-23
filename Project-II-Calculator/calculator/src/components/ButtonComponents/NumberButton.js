import React from 'react';
import './Button.scss';

class NumberButton extends React.Component {

    render() {
        return (
        <div>
            <button name="clear" onClick={e => this.props.onClick(e.target.name)}className="clear">clear</button>
            <div>
                <button name="7" onClick={e => this.props.onClick(e.target.name)}className="number">7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}className="number">8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}className="number">9</button>
            </div>
            <div>
                <button name="4" onClick={e => this.props.onClick(e.target.name)}className="number">4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}className="number">5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}className="number">6</button>
            </div>
            <div>
                <button name="1" onClick={e => this.props.onClick(e.target.name)}className="number">1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}className="number">2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}className="number">3</button>
            </div>
            <button name="0" onClick={e => this.props.onClick(e.target.name)}className="clear zero">0</button>  
        </div>
        )
    }
}
export default NumberButton