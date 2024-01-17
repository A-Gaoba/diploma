import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import Menus from "../../data/index";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const renderSubMenu = (subMenuItems) => (
    <ul>
      {subMenuItems.map((item, index) => (
        <Link to={item.path} key={index}>
          <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 px-8">
            <img
              src={`./src/assets/${item.src}.svg`}
              alt="image of the element"
              className="w-5 h-5"
            />
            <span
              className={`${!isOpen && "hidden"} origin-left duration-200 py-2`}
            >
              {item.title}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  );

  return (
    <div className="flex">
      <div
        className={`${isOpen ? "w-72" : "w-20"
          } bg-dark-purple h-screen p-5 pt-1 relative duration-300`}
      >
        <div className="flex items-center">
          <div className="flex gap-x-4 items-center p-2">
            <img
              src="./src/assets/logo.svg"
              alt="logo"
              className="cursor-pointer w-10 h-12"
            />
            <h1 className="font-bold text-2xl hidden md:flex text-white">
              ALNAHDAH
            </h1>
          </div>
        </div>
        <img
          src="./src/assets/control.svg"
          alt="image for control"
          className={`absolute cursor-pointer -right-3 top-11 w-7 bg-dark-purple border-dark-purple border-2 rounded-full  ${!isOpen && "rotate-180"
            }`}
          onClick={toggleSidebar}
        />
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${menu.gap ? "mt-9" : "mt-2"
                  } ${index === 0 && "bg-light-white"}`}
              >
                <img
                  src={`./src/assets/${menu.src}.svg`}
                  alt="image of the element"
                  className="w-6 h-6"
                />
                <span
                  className={`${!isOpen && "hidden"} origin-left duration-200 py-2`}
                >
                  {menu.title}
                </span>
                {menu.submenu && isOpen && (
                  <FaAngleDown
                    className={`ml-16 ${isSubMenuOpen && "rotate-180"}`}
                    onClick={toggleSubMenu}
                  />
                )}
              </li>
              {menu.submenu && isSubMenuOpen && renderSubMenu(menu.subMenuItem)}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
