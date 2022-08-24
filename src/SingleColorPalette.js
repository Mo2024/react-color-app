import React, { useState, useCallback } from 'react';
import { Link, useParams } from "react-router-dom";
import ColorBox from './ColorBox';
import Footer from './footer';
import Navbar from './Navbar';
import './Palette.css'
import { withStyles } from "@mui/styles"
import styles from "./styles/SingleColorPalette"

function SingleColorPalette(props) {
    const { paletteId, colorId } = useParams();
    const [format, setFormat] = useState('hex')
    let palette = props.getPalette(paletteId)
    let colors = [];
    let classes = props.classes
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
        <ColorBox background={color[format]} name={color.name} key={color.name} showingFullPalette={false} />
    ))

    return (
        <div className={classes.Palette}>
            <Navbar changeFormat={changeFormat} showSlider={false} />
            <div className={classes.PaletteColors}>
                {colorBoxes}
                <div className={classes.goBack} >
                    <Link to={`/palette/${paletteId}`} >Go Back</Link>
                </div>
            </div>
            <Footer paletteName={palette.paletteName} emoji={palette.emoji} />
        </div>
    );
};

export default withStyles(styles)(SingleColorPalette);