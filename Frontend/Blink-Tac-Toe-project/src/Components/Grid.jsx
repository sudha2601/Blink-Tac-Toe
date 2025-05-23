import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emojiCategories from '../storage/categories'; // Make sure this file exports default correctly

const Grid = () => {
  const location = useLocation();
  const { categories1, categories2 } = location.state || {};
  const initialGrid = Array(3).fill(null).map(() => Array(3).fill(null));
  const [grid, setGrid] = useState(initialGrid);
  const [turn, setTurn] = useState(1); // 1 for Player 1, 2 for Player 2
  const [emojiStack1, setEmojiStack1] = useState([]);
  const [emojiStack2, setEmojiStack2] = useState([]);
  const navigate=useNavigate();

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
    navigate("/winner", { state: { turn: turn === 1 ? 2 : 1 } }); 
  }
}, [grid]);


  const handleClick =  (row, col) => {
  if (grid[row][col]) return; // Already filled

  const currentCategory = turn === 1 ? categories1 : categories2;
  const emojis = emojiCategories[currentCategory];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  const newGrid = grid.map((r) => [...r]); // deep copy
  newGrid[row][col] = emoji;

  if (turn === 1) {
    const newStack = [...emojiStack1, { row, col }];
    if (newStack.length > 3) {
      const removed = newStack.shift(); // Remove the oldest
      newGrid[removed.row][removed.col] = null;
    }
    setEmojiStack1(newStack);
  } else {
    const newStack = [...emojiStack2, { row, col }];
    if (newStack.length > 3) {
      const removed = newStack.shift(); // Remove the oldest
      newGrid[removed.row][removed.col] = null;
    }
    setEmojiStack2(newStack);
  }
   
   setGrid(newGrid);
   setLastMove({ row, col }); // 🧠 store the last move
   setTurn(turn === 1 ? 2 : 1);

  
  
};

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        Player {turn}'s turn
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleClick(rowIndex, colIndex)}
              className="w-30 h-30 text-4xl bg-white rounded shadow hover:bg-gray-100 flex items-center justify-center"
              disabled={!!cell}
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


