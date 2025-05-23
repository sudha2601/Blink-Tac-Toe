import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Winner = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const winner = location.state?.turn;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-6">🎉 Game Over 🎉</h1>
        <p className="text-3xl text-gray-800 mb-4">Player <span className="font-bold text-blue-600">{winner}</span> Wins!</p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-full transition-all duration-300"
        >
          Play Again 🔄
        </button>
      </div>
    </div>
  );
};

export default Winner;
