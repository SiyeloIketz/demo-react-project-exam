import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <nav className="z-10 flex justify-between h-16 items-center fixed w-full top-0 bg-white p-4 md:p-0">
        <h1 className="text-2xl font-bold px-12">LOGO</h1>
        <button className="md:hidden">
          <FontAwesomeIcon
            icon={!expanded ? faBars : faXmark}
            onClick={() => setExpanded(!expanded)}
          />
        </button>

        <div className="hidden md:flex items-center h-full">
          <ul className="flex justify-evenly gap-10 h-full items-center text-center">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="/products">Products</Link>
            </li>
            <li className="">
              <Link to="/board-of-directors">Board Of Directors</Link>
            </li>
          </ul>
          <button className="px-8 bg-cyan-400 h-full text-white ml-6 font-semibold">
            Let's Talk
          </button>
        </div>
      </nav>
      {expanded && (
        <div className="flex flex-col items-center text-center mt-16 md:hidden">
            <ul className="flex flex-col gap-4 h-full items-center text-center">
                <li className="">
                    <Link to="/">Home</Link>
                </li>
                <li className="">
                    <Link to="/products">Products</Link>
                </li>
                <li className="">
                    <Link to="/board-of-directors">Board Of Directors</Link>
                </li>
            </ul>
            <button className="m-3  h-full w-full  ml-6 ">Let's Talk</button>
      </div>
      )}
      
    </>
  );
};
