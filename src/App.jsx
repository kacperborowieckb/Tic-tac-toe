import { useState } from 'react';
import './App.css';
import Square from './components/Square';

function App() {
  const [moves, setMoves] = useState(0);
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [win, setWin] = useState(false);
  const winning = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const checkWin = (sign) => {
    let arr = [];
    squares.forEach((item, index) => {
      if (item === sign) {
        arr.push(index + 1);
      }
    });
    winning.forEach((item) => {
      if (item.every((item) => arr.includes(item))) {
        setWin(true);
      }
    });
  };

  const handleMove = (index) => {
    if (squares[index] !== '' || win) return;
    setMoves(moves + 1);
    squares[index] = moves % 2 === 0 ? 'X' : 'O';
    setSquares(squares);
    if (moves >= 4) {
      checkWin(moves % 2 === 0 ? 'X' : 'O');
    }
  };

  const reset = () => {
    setSquares(Array(9).fill(''));
    setMoves(0);
    setWin(false);
  };

  return (
    <>
      {win && <div className="modal win">WIN</div>}
      {moves === 9 && !win && <div className="modal draw">DRAW</div>}
      <div className="game">
        {squares.map((item, index) => {
          return <Square key={index} value={squares[index]} onClick={() => handleMove(index)} />;
        })}
      </div>
      <button className="reset" onClick={reset}>
        Reset Game
      </button>
    </>
  );
}

export default App;
