import React, { useState } from 'react'
import { User } from 'lucide-react';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  let [openmodal,setopenmodal]=useState(false);
  let navigate=useNavigate();
  const play=()=>{
    navigate("/");

  }
  return (
    <>
    <div className='bg-blue-100 p-3 flex justify-between'>
        <ul className='pl-3 flex gap-10 '>
            <li className='cursor-pointer hover:text-green-600 transition duration-200' onClick={play}>Home</li>
            <li className='cursor-pointer hover:text-green-600 transition duration-200' onClick={()=>{
              setopenmodal(true);
            }}>Game Details</li>
            <li className='cursor-pointer hover:text-green-600 transition duration-200'>Help</li>
            <li className='cursor-pointer hover:text-green-600 transition duration-200'>Contact</li>
            
        </ul>
        <button  className='text-emerald-600 pr-2 cursor-pointer '>
          <User size={30}/>
        </button>
    </div>

    {openmodal && <Modal onClose={() => setopenmodal(false)} />}
      
    </>
  );
}

export default Navbar