import { useState } from 'react';

import PickMode from './components/PickModeForm/PickMode';
import Game from './components/Game/Game';
import HoverSquares from './components/HoverSquares/HoverSquares';

import './scss/global.scss';

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [selectedMode, setSelectedMode] = useState(null);
  const [hoveredSquares, setHoveredSquares] = useState([]);

  return (
    <>
      <PickMode
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
        setStartGame={setStartGame}
        setHoveredSquares={setHoveredSquares}
      />
      {startGame ? (
        <div className="container">
          <Game fieldSize={selectedMode} hoveredSquares={hoveredSquares} setHoveredSquares={setHoveredSquares} />
          <HoverSquares fieldSize={selectedMode} hoveredSquares={hoveredSquares} />
        </div>
      ) : null}
    </>
  );
};

export default App;
