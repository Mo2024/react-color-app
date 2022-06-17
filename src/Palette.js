import React, { useState, useCallback } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'
import Navbar from './Navbar';

function Palette(props) {
    const [level, setLevel] = useState(500);

    const colorBoxes = props.palette.colors[level].map(color => (
        <ColorBox background={color.hex} name={color.name} />
    ))

    let changeLevel = useCallback((newLevel) => {
        setLevel(newLevel)
    })

    return (
        <div className='Palette'>
            <Navbar level={level} changeLevel={changeLevel} />
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
        </div>
    );
};

export default Palette;