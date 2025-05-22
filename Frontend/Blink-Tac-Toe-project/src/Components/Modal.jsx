import React from 'react';

const Modal = ({ onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Only close if the backdrop itself is clicked
    }
  };

  return (
    <div
      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
      onClick={handleBackdropClick}
    >
      <div className='bg-white p-6 rounded-xl shadow-lg w-[95%] max-w-2xl relative max-h-[90vh] overflow-y-auto'>
        <button
          className='absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl cursor-pointer'
          onClick={onClose}
        >
          ❌
        </button>

        <h2 className='text-3xl font-bold mb-4 text-center text-blue-700'>🎮 Blink Tac Toe – Game Rules</h2>

        <div className='space-y-6 text-gray-800 text-base leading-relaxed'>

          <div>
            <h3 className='text-xl font-semibold mb-2'>1️⃣ Game Board</h3>
            <p>It's a classic 3x3 grid, just like traditional Tic Tac Toe.</p>
            <p>But there's a twist! Only <strong>6 emojis</strong> can be active on the board at once — <strong>3 per player</strong>.</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-2'>2️⃣ Choosing Emojis</h3>
            <p>Before the game starts, each player picks an emoji category. For example:</p>
            <ul className='list-disc list-inside pl-4'>
              <li>🐾 Animals: 🐶 🐱 🐵 🐰</li>
              <li>🍕 Food: 🍔 🍟 🍩 🍕</li>
              <li>🏀 Sports: ⚽️ 🏀 🏈 🎾</li>
            </ul>
            <p>Every turn, the game gives you a <strong>random emoji from your category</strong> to place.</p>
            <p>💡 You can also create your own emoji category!</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-2'>3️⃣ How to Play</h3>
            <ul className='list-disc list-inside pl-4'>
              <li>👥 Player 1 starts first, then players take turns.</li>
              <li>🖱️ Click on any empty square to place your emoji.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-2'>4️⃣ Emoji Vanish Rule 🔄</h3>
            <p>Each player can only have <strong>3 emojis on the board</strong>.</p>
            <ul className='list-disc list-inside pl-4'>
              <li>On your 4th move, your <strong>oldest emoji disappears</strong> automatically (like a queue — first in, first out).</li>
              <li>You <strong>cannot place</strong> your new emoji in the spot where your first emoji was.</li>
              <li>That cell becomes reusable by anyone later.</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-2'>5️⃣ How to Win 🏆</h3>
            <p>Make a line of <strong>3 of your emojis</strong> to win! The line can be:</p>
            <ul className='list-disc list-inside pl-4'>
              <li>➡️ Horizontal</li>
              <li>⬇️ Vertical</li>
              <li>🔁 Diagonal</li>
            </ul>
            <p>All emojis in the line must be <strong>yours</strong> (from your category).</p>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-2'>6️⃣ Game End 🎉</h3>
            <ul className='list-disc list-inside pl-4'>
              <li>Once a player makes a winning line, the game ends.</li>
              <li>Draws are not possible — because the board never fills up completely (emojis keep vanishing).</li>
              <li>A message will show the winner: <strong>"Player X Wins!"</strong></li>
              <li>Then you’ll see a <strong>“Play Again”</strong> button to restart the game.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;
