import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from "@mui/styles"
import styles from "./styles/PaletteList"

function PaletteList(props) {
    const { classes } = props;
    const history = useNavigate();

    let goToPalette = useCallback((id) => {
        history(`/palette/${id}`);
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React color</h1>
                </nav>

                <div className={classes.palettes}>
                    {props.palettes.map(p => (
                        //     <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
                        <MiniPalette {...p} goToPalette={goToPalette} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(PaletteList);