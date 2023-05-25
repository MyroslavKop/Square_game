import { useState, useEffect } from 'react';
import axios from 'axios';

import Spinner from '../Spinner/Spinner';

import styles from './PickMode.module.scss';

const PickMode = ({ selectedMode, setSelectedMode, setStartGame, setHoveredSquares }) => {
  const [modes, setModes] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`https://60816d9073292b0017cdd833.mockapi.io/modes`);
        setModes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = ({ target: { value } }) => {
    setSelectedMode(value);
    setStartGame(false);
    setHoveredSquares([]);
  };

  const handleStartGame = () => {
    setStartGame(true);
  };

  return (
    <div className={styles.mode}>
      {loading ? (
        <Spinner />
      ) : (
        <select className={styles.select} onChange={handleChange}>
          <option value="">Pick Mode</option>
          {modes &&
            modes.map(({ name, field, id }) => {
              return (
                <option value={field} key={id}>
                  {name}
                </option>
              );
            })}
        </select>
      )}
      <button className={styles.button} disabled={!selectedMode} onClick={handleStartGame}>
        start
      </button>
    </div>
  );
};

export default PickMode;
