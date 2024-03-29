import React, { useState, useCallback } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'
import Navbar from './Navbar';
import { useParams } from "react-router-dom";
import Footer from './footer';
import { withStyles } from "@mui/styles"
import styles from './styles/PaletteStyles'

function Palette(props) {
    const { id } = useParams();
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex')
    let palette = props.getPalette(id)
    let classes = props.classes

    const colorBoxes = palette.colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} showingFullPalette={true} paletteId={id} showLink={true} />
    ))

    let changeLevel = useCallback((newLevel) => {
        setLevel(newLevel)
    })

    let changeFormat = useCallback((val) => {
        setFormat(val)
    })

    return (
        <div className={classes.Palette}>
            <Navbar level={level} changeLevel={changeLevel} changeFormat={changeFormat} showSlider={true} />
            <div className={classes.PaletteColors}>
                {colorBoxes}
            </div>
            <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
        </div>
    );
};

export default withStyles(styles)(Palette);