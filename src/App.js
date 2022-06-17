import Palette from "./Palette";
import seedColors from './seedColors'
import './App.css'
import { generatePalette } from './colorHelpers'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />


    // </div>
    <Routes>
      <Route exact path="/" element={<h1>Main Menu</h1>} />
      <Route exact path="/palette/:id" element={<h1 >id palette</h1>} />
      {/* <Route exact path="/" element={<DogList dogs={props.dogs} />} /> */}
      {/* <Route exact path='*' element={<Error />} /> */}
    </Routes>

  );
}

export default App;
