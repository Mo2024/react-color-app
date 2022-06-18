import React from 'react';
import { Link } from 'react-router-dom';

function PaletteList(props) {
    return (
        <div>
            <h1>React color</h1>
            {props.palettes.map(p => (
                <p>
                    <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
                </p>
            ))}
        </div>
    );
};

export default PaletteList;