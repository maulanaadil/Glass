import React, { Dispatch, SetStateAction } from 'react';
import { X } from 'react-feather';
import { NavLink } from 'react-router-dom';

const OptionMenu = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => (
  <div className="absolute bg-white bg-opacity-20 backdrop-blur-2xl px-4 py-4 rounded-xl w-80 h-auto top-8 right-6 z-50">
    <X className="ml-auto text-white" onClick={() => setIsOpen(!isOpen)} />
    <div className="flex items-center flex-col gap-2 text-white">
      <NavLink to="/">
        <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-xl">
          <p className="text-sm font-bold">Dashboard</p>
        </div>
      </NavLink>
      <NavLink to="/analytics">
        <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-xl">
          <p className="text-sm font-bold">Analytics</p>
        </div>
      </NavLink>
      <NavLink to="/work">
        <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200 rounded-xl">
          <p className="text-sm font-bold">Work</p>
        </div>
      </NavLink>
    </div>
  </div>
);

export default OptionMenu;
