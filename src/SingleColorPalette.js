import React, { useState, useCallback } from 'react';
import { Link, useParams } from "react-router-dom";
import ColorBox from './ColorBox';
import Footer from './footer';
import Navbar from './Navbar';
import './Palette.css'
import { withStyles } from "@mui/styles"

const styles = {

    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    PaletteColors: {
        height: '90%',
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opacity: '1',
        backgroundColor: 'black',
        "& a": {
            color: 'white',
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            background: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            lineHeight: "30px",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none",
        }


    },
}

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