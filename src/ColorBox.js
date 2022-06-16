import React from 'react';
import './ColorBox.css'

function ColorBox(props) {
    return (
        <div style={{ background: props.background }} className='ColorBox' >
            <div className='copy-container'>
                <div className='box-content'>
                    <span>{props.name}</span>
                </div>
                <button className='copy-button'>Copy</button>
            </div>
            <span className='see-more'>More</span>
        </div >
    );
};

export default ColorBox;