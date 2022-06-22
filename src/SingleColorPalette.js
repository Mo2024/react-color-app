import React, { useState, useCallback } from 'react';
import { useParams } from "react-router-dom";
import ColorBox from './ColorBox';


function SingleColorPalette(props) {
    const { paletteId, colorId } = useParams();
    let palette = props.getPalette(paletteId)
    let colors = [];
    delete palette.colors[50]

    for (const shade in palette.colors) {
        for (const color of palette.colors[shade]) {
            if (colorId == color.id) {
                colors.push(color)
            }
        }
    }

    const colorBoxes = colors.map(color => (
        <ColorBox background={color.hex} name={color.name} key={color.name} showLink={false} />
    ))

    return (
        <div>
            <div>
                {colorBoxes}
            </div>
        </div>
    );
};

export default SingleColorPalette;