import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from "@mui/styles"

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
};

function PaletteList(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React color</h1>
                </nav>

                <div className={classes.palettes}>
                    {props.palettes.map(p => (
                        //     <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
                        <MiniPalette {...p} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(PaletteList);