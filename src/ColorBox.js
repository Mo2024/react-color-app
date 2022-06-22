import React, { useState, useCallback } from 'react';
import './ColorBox.css'
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Link } from 'react-router-dom';

function ColorBox(props) {
    let { background, name, id, paletteId, showLink } = props;
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
            <div style={{ background: background }} className='ColorBox' >
                <div style={{ background: background }} className={`copy-overlay ${copied ? "show" : ""}`} />
                <div className={`copy-message ${copied ? "show" : ""}`}>
                    <h1>Copied!</h1>
                    <p>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                {showLink && (
                    <Link to={`/palette/${paletteId}/${id}`} onClick={stopPropagation}>
                        <span className='see-more'>More</span>
                    </Link>
                )}

            </div >
        </CopyToClipboard>
    );
};

export default ColorBox;