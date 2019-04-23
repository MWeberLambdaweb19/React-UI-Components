import React from 'react';
import './Button.scss';

function NumberButton () {
    return (
    <div>
        <button className="clear">clear</button>
        <div>
            <button className="number">7</button>
            <button className="number">8</button>
            <button className="number">9</button>
        </div>
        <div>
            <button className="number">4</button>
            <button className="number">5</button>
            <button className="number">6</button>
        </div>
        <div>
            <button className="number">1</button>
            <button className="number">2</button>
            <button className="number">3</button>
        </div>
        <button className="clear zero">0</button>  
    </div>)
}

export default NumberButton