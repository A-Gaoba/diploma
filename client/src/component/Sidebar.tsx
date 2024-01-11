import React, { useState } from 'react';
import Menus from '../data/index';
import { Link } from 'react-router-dom';
import Home from '../page/students/Home';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="flex">
      <div
        className={` ${open ? 'w-72' : 'w-20 '} bg-dark-purple h-screen p-5 pt-1 relative duration-300`}
      >
        <img
          src="./src/assets/control.svg"
          alt="image for control"
          className={`absolute cursor-pointer -right-3 top-11 w-7 bg-dark-purple border-dark-purple border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={toggleSidebar}
        />
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'}
                  `}
              >
                <img src={`./src/assets/${menu.src}.svg`} alt="image of the element" className=' w-6 h-4' />
                <span className={`${!open && 'hidden'} origin-left duration-200 py-2`}>{menu.title}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div>
        <Home />
      </div>
      
    </div>
  );
};

export default Sidebar;
