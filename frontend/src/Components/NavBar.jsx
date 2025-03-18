import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, PlusIcon, FolderIcon } from '@heroicons/react/24/solid';

function NavBar() {
  return (
    <nav className="fixed bottom-0 md:top-0 w-full h-16 bg-black border-t border-gray-800 shadow-lg md:border-b md:border-t-0 z-50">
      <ul className="flex justify-around items-center h-full text-white">
        <NavLink
          to="/reporting"
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? 'text-grey-400' : 'text-white'}`
          }
        >
          <ChartBarIcon className="h-6 w-6" />
          <span className="text-xs">Reporting</span>
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? 'text-grey-400' : 'text-white'}`
          }
        >
          <PlusIcon className="h-6 w-6" />
          <span className="text-xs">Add</span>
        </NavLink>

        <NavLink
          to="/receipts"
          className={({ isActive }) =>
            `flex flex-col items-center ${isActive ? 'text-grey-400' : 'text-white'}`
          }
        >
          <FolderIcon className="h-6 w-6" />
          <span className="text-xs">Receipts</span>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;