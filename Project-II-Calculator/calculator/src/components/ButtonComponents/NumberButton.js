import React from 'react';
import './Button.scss';

function NumberButton () {
    return (
    <div>
        <button>Clear</button>
        <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
        </div>
        <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
        </div>
        <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
        </div>
        <button>0</button>  
    </div>)
}

export default NumberButton