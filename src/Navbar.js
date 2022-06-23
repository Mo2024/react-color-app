import React, { useState, useCallback } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'
import Select from '@material-ui/core/Select';
import { IconButton, MenuItem } from '@material-ui/core';
import Snackbar from '@mui/material/Snackbar';
import { Close } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const [format, setFormat] = useState('hex')
    const [open, setOpen] = useState(false)

    let handleFormatChange = useCallback((e) => {
        setFormat(e.target.value)
        setOpen(true)
        props.changeFormat(e.target.value)
    })
    let closeSnackbar = useCallback(() => {
        setOpen(false)
    })

    return (
        <header className='Navbar'>
            <div className='logo'>
                <Link to='/'>Color App</Link>
            </div>
            {props.showSlider && (
                <div className='slider-container'>
                    <span>Level {props.level}</span>
                    <div className='slider'>
                        <Slider step={100} defaultValue={props.level} min={100} max={900} onAfterChange={props.changeLevel} />
                    </div>
                </div>
            )}
            <div className='select-container'>
                <Select value={format} onChange={handleFormatChange}>
                    <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                    <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={open}
                autoHideDuration={300}
                message={<span id='msg-id'>Format Changed!</span>}
                ContentProps={{ "aria-describedby": "msg-id" }}
                onClose={closeSnackbar}
                action={[
                    <IconButton onClick={closeSnackbar} color='inherit' key="close" aria-label='close'>
                        <Close />
                    </IconButton>
                ]}
            />
        </header>
    );
};

export default Navbar;