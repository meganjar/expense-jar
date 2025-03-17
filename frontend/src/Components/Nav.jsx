import React from "react";
import { Router, Link, Nav } from "react-router-dom";
import { HomeIcon, HeartIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function LowerNav() {
  return (
    <div>
      <nav className="fixed bottom-0 left-0 w-screen h-16 bg-black border-t border-gray-800 shadow-lg">
        <ul className="flex flex-row justify-around text-brown items-center h-full">
          <NavItem
            to="/"
            icon={<HomeIcon className="h-6 w-6 text-white" />}
            label="Home"
          />
          <NavItem
            to="/search"
            icon={<plus className="h-6 w-6 text-white" />}
            label="Search"
          />
          <NavItem
            to="/favorites"
            icon={<HeartIcon className="h-6 w-6 text-white" />}
            label="Favorites"
          />
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
