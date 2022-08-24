import React, { useState, useCallback } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Link } from 'react-router-dom';
import { withStyles } from "@mui/styles"
import styles from "./styles/ColorBoxStyles"

function ColorBox(props) {
    let { background, name, id, paletteId, showingFullPalette, classes, goBack } = props;
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
                <div style={{ background: background }} className={`${classes.CopyOverlay} ${copied && classes.ShowOverlay}`} />

                <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
                    <h1>Copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div>
                    <div className={classes.BoxContent}>
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