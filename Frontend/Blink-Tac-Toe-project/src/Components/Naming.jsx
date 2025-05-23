import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Naming = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player1 && player2) {
      navigate('/select-category', { state: { player1, player2 } });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Enter Player Names</h2>
        <input
          type="text"
          placeholder="Player 1 Name"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          className="px-4 py-2 border rounded-lg outline-none"
          required
        />
        <input
          type="text"
          placeholder="Player 2 Name"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          className="px-4 py-2 border rounded-lg outline-none"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Start Game
        </button>
      </form>
    </div>
  );
};

export default Naming;
