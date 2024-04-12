import './App.css';
import React, {useState} from 'react';
import HomePage from './components/HomePage';
import Start from './components/Start';
import Puzzle1 from './components/Puzzle1';
import Puzzle2 from './components/Puzzle2';
import Puzzle3 from './components/Puzzle3';
import Puzzle4 from './components/Puzzle4';
import Puzzle5 from './components/Puzzle5';
import Puzzle6 from './components/Puzzle6';

function App() {

  const [puzzleNum, setPuzzleNum] = useState(5)

  function nextPuzzle() {
    setPuzzleNum(prevPuzzleNum => prevPuzzleNum + 1)
  }

  function restart(){
    setPuzzleNum(0)
  }

  return (
    <div className="App">
      {puzzleNum === 0 && <HomePage nextPuzzle={nextPuzzle} />}
      {puzzleNum === 1 && <Start nextPuzzle={nextPuzzle} />}
      {puzzleNum === 2 && <Puzzle1 nextPuzzle={nextPuzzle}/>}
      {/* {puzzleNum === 2 && <Puzzle2 nextPuzzle={nextPuzzle}/>} */}
      {puzzleNum === 3 && <Puzzle3 nextPuzzle={nextPuzzle}/>}
      {/* {puzzleNum === 3 && <Puzzle4 nextPuzzle={nextPuzzle} />} */}
      {puzzleNum === 4 && <Puzzle5 nextPuzzle={nextPuzzle} />}
      {puzzleNum === 5 && <Puzzle6 restart={restart} />}
    </div>
  );
}

export default App;
