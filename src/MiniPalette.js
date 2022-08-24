import React from "react";
import { withStyles } from "@mui/styles"
import styles from './styles/MiniPalette'

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors, goToPalette, id } = props;
    const miniColorBoxes = colors.map(color => (
        <div key={color.name} className={classes.miniColor} style={{ backgroundColor: color.color }}></div>
    ))
    return (
        <div className={classes.root} onClick={() => { goToPalette(id) }}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);