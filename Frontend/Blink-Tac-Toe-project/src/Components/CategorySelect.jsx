import React, { useState } from 'react'
import emojiCategories from '../storage/categories';
import { useNavigate } from 'react-router-dom';

const CategorySelect = () => {
    let [playerturn, setplayerturn] = useState(1);
    let [categories1, setcategories1] = useState("");
    let [categories2, setcategories2] = useState("");
    let [selected, setselected] = useState("");
    const navigate = useNavigate();

    const turn = (category) => {
        if (playerturn === 1) {
            setplayerturn(2);
            setselected(category);
            setcategories1(category);
        } else {
            setcategories2(category);
            navigate('/play', { state: { categories1: categories1, categories2: category } });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-300 to-slate-500">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-2xl w-full">
                <p className="text-2xl font-bold text-center text-indigo-600 mb-6">
                    {playerturn === 1 ? '🎮 Player 1: Choose your Category' : '🎮 Player 2: Choose your Category'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(emojiCategories).map(([category, emojis]) => (
                        (playerturn === 1 || category !== selected) && (
                            <button
                                key={category}
                                onClick={() => turn(category)}
                                className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition transform hover:scale-105 active:scale-95 text-left"
                            >
                                <div className="text-lg font-medium mb-1">{category}</div>
                                <div className="text-2xl">{emojis.join(' ')}</div>
                            </button>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorySelect;
