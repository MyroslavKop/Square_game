import styles from './HoverSquares.module.scss';

const HoverSquares = ({ fieldSize, hoveredSquares }) => {
  const getSquareInfo = (index) => {
    const row = Math.floor(index / fieldSize) + 1;
    const col = (index % fieldSize) + 1;
    return <div className={styles.info} key={Math.random()}>{`row ${row} col ${col}`}</div>;
  };

  return (
    <div>
      <h2>Hover squares</h2>
      <div className={styles.info_container}>{hoveredSquares.map(getSquareInfo)}</div>
    </div>
  );
};

export default HoverSquares;
