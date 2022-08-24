import React from 'react';
import './Palette.css'
import { withStyles } from "@mui/styles"
import styles from './styles/FooterStyles'

function Footer(props) {
    let { classes, emoji, paletteName } = props
    return (
        <footer className={classes.PaletteFooter}>
            {paletteName}
            <span className={classes.emoji}>{emoji}</span>
        </footer>
    );
};

export default withStyles(styles)(Footer);