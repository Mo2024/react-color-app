import React from 'react';
import './Palette.css'

function Footer(props) {
    return (
        <footer className='palette-footer'>
            {props.paletteName}
            <span className='emoji'>{props.emoji}</span>
        </footer>
    );
};

export default Footer;