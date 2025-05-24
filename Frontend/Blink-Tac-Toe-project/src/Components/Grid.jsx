import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emojiCategories from '../storage/categories'; // Make sure this file exports default correctly

const Grid = () => {
  const location = useLocation();
  const { categories1, categories2, player1, player2 } = location.state || {};
  const initialGrid = Array(3).fill(null).map(() => Array(3).fill(null));
  const [grid, setGrid] = useState(initialGrid);
  const [turn, setTurn] = useState(1); // 1 for Player 1, 2 for Player 2
  const [emojiStack1, setEmojiStack1] = useState([]);
  const [emojiStack2, setEmojiStack2] = useState([]);
  const [flashCell, setFlashCell] = useState(null);
  const [animatedCell, setAnimatedCell] = useState(null);
  const [errorCell, setErrorCell] = useState(null);


  const navigate = useNavigate();
  const placeSound = new Audio('/place-100513.mp3');
  const winSound = new Audio('/goodresult-82807.mp3');



  const getCategoryFromEmoji = (emoji) => {
    for (const [category, emojiList] of Object.entries(emojiCategories)) {
      console.log(`Checking emoji ${emoji} against list:`, emojiList);
      if (emojiList.includes(emoji)) {
        console.log(`Matched in category: ${category}`);
        return category;
      }
    }
    console.warn(`No category found for emoji: "${emoji}"`);
    return null;
  };
  const [lastMove, setLastMove] = useState(null);




  const winner = (row, col) => {
    const category = getCategoryFromEmoji(grid[row][col]);
    if (!category) return false;


    let rowWin = true;
    for (let i = 0; i < 3; i++) {
      if (!grid[row][i] || getCategoryFromEmoji(grid[row][i]) !== category) {
        rowWin = false;
        break;
      }
    }


    let colWin = true;
    for (let i = 0; i < 3; i++) {
      if (!grid[i][col] || getCategoryFromEmoji(grid[i][col]) !== category) {
        colWin = false;
        break;
      }
    }


    let diag1Win = true;
    if (row === col) {
      for (let i = 0; i < 3; i++) {
        if (!grid[i][i] || getCategoryFromEmoji(grid[i][i]) !== category) {
          diag1Win = false;
          break;
        }
      }
    } else {
      diag1Win = false;
    }


    let diag2Win = true;
    if (row + col === 2) {
      for (let i = 0; i < 3; i++) {
        if (!grid[i][2 - i] || getCategoryFromEmoji(grid[i][2 - i]) !== category) {
          diag2Win = false;
          break;
        }
      }
    } else {
      diag2Win = false;
    }

    return rowWin || colWin || diag1Win || diag2Win;
  };


  useEffect(() => {
    if (!lastMove) return;
    const { row, col } = lastMove;
    if (winner(row, col)) {
      winSound.play(); // <- Add this
      setTimeout(() => {
        navigate("/winner", {
          state: { winner: turn === 1 ? 2 : 1, player1: player1, player2: player2 }
        });
      }, 800); // slight delay so sound plays
    }

  }, [grid]);


  const handleClick = (row, col) => {
    if (grid[row][col]) {
      setErrorCell(`${row}-${col}`);
      setTimeout(() => setErrorCell(null), 500);
      return;
    }

    const currentCategory = turn === 1 ? categories1 : categories2;
    const emojis = emojiCategories[currentCategory];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    placeSound.currentTime = 0;
    placeSound.play();
    const newGrid = grid.map((r) => [...r]);
    newGrid[row][col] = emoji;
    setAnimatedCell(`${row}-${col}`);
    setTimeout(() => setAnimatedCell(null), 500); // remove class after animation

    if (turn === 1) {
      const newStack = [...emojiStack1, { row, col }];
      if (newStack.length > 3) {
        const removed = newStack.shift();
        newGrid[removed.row][removed.col] = null;
        setFlashCell(`${removed.row}-${removed.col}`);
        setTimeout(() => setFlashCell(null), 1000);
      }
      setEmojiStack1(newStack);
    } else {
      const newStack = [...emojiStack2, { row, col }];
      if (newStack.length > 3) {
        const removed = newStack.shift();
        newGrid[removed.row][removed.col] = null;
        setFlashCell(`${removed.row}-${removed.col}`);
        setTimeout(() => setFlashCell(null), 1000);
      }
      setEmojiStack2(newStack);
    }

    setGrid(newGrid);
    setLastMove({ row, col });
    setTurn(turn === 1 ? 2 : 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
      {/* 🎵 Background music that plays continuously */}
      <audio src="/game-music-loop-6-144641.mp3" autoPlay loop />
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        {turn === 1 ? `${player1}'s turn` : `${player2}'s turn`}
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleClick(rowIndex, colIndex)}
              className={`
    w-20 h-20 sm:w-24 sm:h-24 text-3xl sm:text-4xl rounded shadow flex items-center justify-center
    transition-colors duration-500
    ${flashCell === `${rowIndex}-${colIndex}` ? 'bg-black text-white' : 'bg-white'}
    ${animatedCell === `${rowIndex}-${colIndex}` ? 'animate-bounce' : ''}
    ${errorCell === `${rowIndex}-${colIndex}` ? 'bg-red-400 text-white' : ''}
  `}
            >
              {cell}
            </button>

          ))
        )}
      </div>
    </div>
  );
};

export default Grid;


