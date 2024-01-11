import React from 'react';

const Navbar: React.FC = () => {
  const name: string = "Abdulrahman";
  const firstLetter: string = name ? name.charAt(0).toUpperCase() : '';

  return (
    <div className="flex justify-between items-center p-4 bg-dark-purple text-white">
      {/* logo */}
      <div className="flex items-center">
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.svg"
            alt="logo"
            className="cursor-pointer w-10 h-12"
          />
          <h1 className="font-bold text-2xl hidden md:flex">
            ALNAHDAH
          </h1>
        </div>
      </div>

      {/* search bar */}
      <div className="relative">
        <input
          type="text"
          className="pl-4 pr-10 py-2 border text-black border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500 hidden md:flex"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <img
            src="/src/assets/search.svg"
            alt="Search Icon"
            className="h-6 w-6 text-gray-400"
          />
        </div>
      </div>

      {/* user */}
      <div className="flex items-center">
        <span className="mr-4">{name}</span>
        <div className="rounded-full overflow-hidden">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold">
            {firstLetter}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
