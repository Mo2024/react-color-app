import React, { useState, useCallback } from 'react';
import './ColorBox.css'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Link } from 'react-router-dom';
import chrome from 'chroma-js'
import { withStyles } from "@mui/styles"

const styles = {
    copyText: {
        color: props => chrome(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorName: {
        color: props => chrome(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    seeMore: {
        color: props => chrome(props.background).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.7)" : "white",
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0px",
        bottom: "0px",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase",
    },
    copyButton: {
        color: props => chrome(props.background).luminance() >= 0.7 ? "rgba(0, 0, 0, 0.7)" : "white",
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
        opacity: "0",
    },
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: '1',
            transition: '0.5s'

        }
    }

}

function ColorBox(props) {
    let { background, name, id, paletteId, showingFullPalette, classes } = props;
    const [copied, setCopied] = useState(false);

    let changeCopyState = useCallback(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    })

    let stopPropagation = useCallback((e) => {
        e.stopPropagation()
    })


    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background: background }} className={classes.ColorBox} >
                <div style={{ background: background }} className={`copy-overlay ${copied ? "show" : ""}`} />
                <div className={`copy-message ${copied ? "show" : ""}`}>
                    <h1>Copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {showingFullPalette && (
                    <Link to={`/palette/${paletteId}/${id}`} onClick={stopPropagation}>
                        <span className={classes.seeMore}>More</span>
                    </Link>
                )}

            </div >
        </CopyToClipboard>
    );
};

export default withStyles(styles)(ColorBox);