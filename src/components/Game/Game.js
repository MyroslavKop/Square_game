import styles from './Game.module.scss';

const Game = ({ fieldSize, hoveredSquares, setHoveredSquares }) => {
  const handleSquareHover = (index) => {
    if (hoveredSquares.includes(index)) {
      setHoveredSquares(hoveredSquares.filter((item) => item !== index));
    } else {
      setHoveredSquares([...hoveredSquares, index]);
    }
  };

  const renderSquares = () => {
    const squares = [];

    for (let i = 0; i < fieldSize; i++) {
      for (let j = 0; j < fieldSize; j++) {
        const squareIndex = i * fieldSize + j;
        const isSquareHovered = hoveredSquares.includes(squareIndex);

        squares.push(
          <div
            key={`${i}-${j}`}
            className={`${styles.square} ${isSquareHovered ? styles.blue : ''}`}
            onMouseEnter={() => handleSquareHover(squareIndex)}></div>,
        );
      }
    }

    return squares;
  };

  const squareStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: `${fieldSize * (40 + 2)}px`,
    alignContent: 'flex-start',
  };

  return <div style={squareStyle}>{renderSquares()}</div>;
};

export default Game;
