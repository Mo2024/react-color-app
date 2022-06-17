import Palette from "./Palette";
import seedColors from './seedColors'
import './App.css'
import { generatePalette } from './colorHelpers'
import { Routes, Route } from 'react-router-dom';
import { useCallback } from 'react';


function App() {

  let getPalette = useCallback((id) => {
    let palette = seedColors.find(pal => { return pal.id === id; })
    return generatePalette(palette);
  })

  return (
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />


    // </div>
    <Routes>
      <Route exact path="/" element={<h1>Main Menu</h1>} />
      <Route exact path="/palette/:id" element={<Palette getPalette={getPalette} />} />
      {/* <Route exact path='*' element={<Error />} /> */}
    </Routes>

  );
}

export default App;
