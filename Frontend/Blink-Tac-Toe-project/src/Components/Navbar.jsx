import React, { useState } from 'react';
import { User, Menu } from 'lucide-react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const play = () => {
    navigate('/');
  };

  return (
    <>
      <div className="bg-blue-100 p-3 flex justify-between items-center">
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setShowMenu(!showMenu)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex gap-10">
          <li className="cursor-pointer hover:text-green-600 transition duration-200" onClick={play}>Home</li>
          <li className="cursor-pointer hover:text-green-600 transition duration-200" onClick={() => setOpenModal(true)}>Game Details</li>
          <li className="cursor-pointer hover:text-green-600 transition duration-200">Help</li>
          <li className="cursor-pointer hover:text-green-600 transition duration-200">Contact</li>
        </ul>

        {/* User Icon */}
        <button className="text-emerald-600 cursor-pointer">
          <User size={30} />
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {showMenu && (
        <ul className="flex flex-col bg-blue-100 md:hidden px-5 py-3 gap-4">
          <li className="cursor-pointer hover:text-green-600 transition duration-200" onClick={() => {
            play();
            setShowMenu(false);
          }}>Home</li>
          <li className="cursor-pointer hover:text-green-600 transition duration-200" onClick={() => {
            setOpenModal(true);
            setShowMenu(false);
          }}>Game Details</li>
          <li className="cursor-pointer hover:text-green-600 transition duration-200">Help</li>
          <li className="cursor-pointer hover:text-green-600 transition duration-200">Contact</li>
        </ul>
      )}

      {openModal && <Modal onClose={() => setOpenModal(false)} />}
    </>
  );
};

export default Navbar;
