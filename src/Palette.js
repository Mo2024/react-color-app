import React, { useState, useCallback } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'
import Navbar from './Navbar';
import seedColors from './seedColors'
import { useParams } from "react-router-dom";

function Palette(props) {
    const { id } = useParams();
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex')
    let palette = props.getPalette(id)

    const colorBoxes = palette.colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name} key={color.id} />
    ))

    let changeLevel = useCallback((newLevel) => {
        setLevel(newLevel)
    })

    let changeFormat = useCallback((val) => {
        setFormat(val)
    })

    // let palette = seedColors.find(pal => { return pal.id === id; })


    return (
        <div className='Palette'>
            <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat} />
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            <footer className='palette-footer'>
                {palette.paletteName}
                <span className='emoji'>{palette.emoji}</span>
            </footer>
        </div>
    );
};

export default Palette;