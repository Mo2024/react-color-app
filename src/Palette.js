import React, { useState, useCallback } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'
import Navbar from './Navbar';

function Palette(props) {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex')

    const colorBoxes = props.palette.colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name} key={color.id} />
    ))

    let changeLevel = useCallback((newLevel) => {
        setLevel(newLevel)
    })

    let changeFormat = useCallback((val) => {
        setFormat(val)
    })

    return (
        <div className='Palette'>
            <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat} />
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            <footer className='palette-footer'>
                {props.palette.paletteName}
                <span className='emoji'>{props.palette.emoji}</span>
            </footer>
        </div>
    );
};

export default Palette;