import React, { useState, useCallback } from 'react';
import './ColorBox.css'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Link } from 'react-router-dom';
import chrome from 'chroma-js'

function ColorBox(props) {
    let { background, name, id, paletteId, showLink } = props;
    const [copied, setCopied] = useState(false);
    const isDark = chrome(background).luminance() <= 0.08;
    const isLight = chrome(background).luminance() >= 0.7;

    let changeCopyState = useCallback(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    })

    let stopPropagation = useCallback((e) => {
        e.stopPropagation()
    })


    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background: background }} className='ColorBox' >
                <div style={{ background: background }} className={`copy-overlay ${copied ? "show" : ""}`} />
                <div className={`copy-message ${copied ? "show" : ""}`}>
                    <h1>Copied!</h1>
                    <p className={isLight && 'dark-text'}>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span className={isDark && `light-text`}>{name}</span>
                    </div>
                    <button className={`copy-button ${isLight && 'dark-text'}`}>Copy</button>
                </div>
                {showLink && (
                    <Link to={`/palette/${paletteId}/${id}`} onClick={stopPropagation}>
                        <span className={`see-more ${isLight && 'dark-text'}`}>More</span>
                    </Link>
                )}

            </div >
        </CopyToClipboard>
    );
};

export default ColorBox;