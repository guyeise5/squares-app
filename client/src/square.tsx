import React from 'react';
import './style.css';

function Square(colors: string[] | undefined) {
    if(!colors) {
        return
    }
    return (
        <div className="square">
            {colors.map((color, i) => (
                <div key={i} className="little-square" style={{backgroundColor: color, margin: "10px"}} />
            ))}
        </div>
    );
}

export default Square;
