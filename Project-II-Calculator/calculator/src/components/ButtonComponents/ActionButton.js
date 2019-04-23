import React from 'react';
import './Button.scss';

function ActionButton () {
    return (
        <div className="actions">
            <button>&#247;</button>
            <button>&#215;</button>
            <button>&#8722;</button>
            <button>&#43;</button>
            <button>&#61;</button>
        </div>
    )
};

export default ActionButton;