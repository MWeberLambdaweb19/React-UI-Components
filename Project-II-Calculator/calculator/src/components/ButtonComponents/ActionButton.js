import React, {Component} from 'react';
import './Button.scss';

class ActionButton extends Component{
    constructor(){
        super();
    }
    render () {
        return (
            <div className="actions">
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>&#247;</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>&#215;</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>&#8722;</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>&#43;</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>&#61;</button>
            </div>
        )
    };
}

export default ActionButton;