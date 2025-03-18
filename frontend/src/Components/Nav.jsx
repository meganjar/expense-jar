import React from "react";
import { Routes, Link, NavLink } from "react-router";
import { HomeIcon, HeartIcon, PlusIcon } from "@heroicons/react/24/solid";


function LowerNav() {
  return (
    <div>
      <nav className="fixed bottom-0 left-0 w-screen h-16 bg-black border-t border-gray-800 shadow-lg">
        <ul className="flex flex-row justify-around text-brown items-center h-full">
          <NavLink
            to="/"
            icon={<HomeIcon className="h-6 w-6 text-white" />}
            label="Home"
          />
          <NavLink
            to="/search"
            icon={<PlusIcon className="h-6 w-6 text-white" />}
            label="Search"
          />
          <NavLink
            to="/favorites"
            icon={<HeartIcon className="h-6 w-6 text-white" />}
            label="Favorites"
          />
        </ul>
      </nav>
      hihi
    </div>
  );
}

export default LowerNav;
