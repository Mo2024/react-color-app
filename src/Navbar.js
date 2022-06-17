import React, { useState, useCallback } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'

function Navbar(props) {
    return (
        <header className='Navbar'>
            <div className='logo'>
                <a href='#'>Color App</a>
            </div>
            <div className='slider-container'>
                <span>Level {props.level}</span>
                <div className='slider'>
                    <Slider step={100} defaultValue={props.level} min={100} max={900} onAfterChange={props.changeLevel} />
                </div>
            </div>

        </header>
    );
};

export default Navbar;