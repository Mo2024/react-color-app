import React, { useState, useCallback } from 'react';
import { Link, useParams } from "react-router-dom";
import ColorBox from './ColorBox';
import Footer from './footer';
import Navbar from './Navbar';
import './Palette.css'


function SingleColorPalette(props) {
    const { paletteId, colorId } = useParams();
    const [format, setFormat] = useState('hex')
    let palette = props.getPalette(paletteId)
    let colors = [];
    delete palette.colors[50]

    for (const shade in palette.colors) {
        for (const color of palette.colors[shade]) {
            if (colorId == color.id) {
                colors.push(color)
            }
        }
    }

    let changeFormat = useCallback((val) => {
        setFormat(val)
    })

    const colorBoxes = colors.map(color => (
        <ColorBox background={color[format]} name={color.name} key={color.name} showLink={false} />
    ))

    return (
        <div className='SingleColorPalette Palette'>
            <Navbar changeFormat={changeFormat} showSlider={false} />
            <div className='Palette-colors'>
                {colorBoxes}
                <div className="go-back ColorBox" >
                    <Link to={`/palette/${paletteId}`} className='back-button'>Go Back</Link>
                </div>
            </div>
            <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
        </div>
    );
};

export default SingleColorPalette;