import Palette from "./Palette";
import seedColors from './seedColors'
import './App.css'
import { generatePalette } from './colorHelpers'
import { Routes, Route } from 'react-router-dom';
import { useCallback } from 'react';
import PaletteList from "./PaletteList";


function App() {

  let getPalette = useCallback((id) => {
    let palette = seedColors.find(pal => { return pal.id === id; })
    return generatePalette(palette);
  })

  return (
    <Routes>
      <Route exact path="/" element={<PaletteList palettes={seedColors} />} />
      <Route exact path="/palette/:id" element={<Palette getPalette={getPalette} />} />
      <Route exact path="/palette/:paletteId/:colorId" element={<h1>Test</h1>} />
      {/* <Route exact path='*' element={<Error />} /> */}
    </Routes>

  );
}

export default App;
