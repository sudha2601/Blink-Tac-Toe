import React from 'react';
import { useNavigate } from 'react-router-dom';

const Play = () => {
    const navigate=useNavigate();
    const change=()=>{
        navigate('/Naming');

    }
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-blue-200 to-purple-300">
      <button
        onClick={change} 
        className="px-10 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white text-2xl font-bold rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        ▶️ Play
      </button>
    </div>
  );
};

export default Play;
