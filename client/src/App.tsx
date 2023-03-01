import React, {useEffect, useState} from 'react';
import './App.css';
import square from "./square";
import {colorArray} from "./colorProvider";

function App() {
    const [colors, setColors] = useState<string[]>()
    useEffect(() => {
        setInterval(() => colorArray(10 * 10).then(setColors), 1000)
    }, [])
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100',
        }}
        >
            {square(colors)}
        </div>
    )
}

export default App;
