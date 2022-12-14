import { useState } from "react"; // import state
import { NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const activeStyle = {
    color: "rgb(129 140 248)",
    textDecorationLine: "underline",
    textUnderlineOffset: "5px",
  };

  return (
    <div className="NAV flex items-center justify-between border-b border-gray-400 px-10 pt-5 pb-2 bg-purple-100">
      <div className="animate-wiggle">
        <h3 className="py-3 text-4xl  text-indigo-900 font-mono font-bold tracking-widest ;">
          ToDay
        </h3>
      </div>

      <nav>
        <section className="MOBILE-MENU flex md:hidden">
          <div
            className={isNavOpen ? "hideMenuNav" : "space-y-1.5 cursor-pointer"}
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-1 w-8 animate-pulse bg-violet-900"></span>
            <span className="block h-1 w-8 animate-pulse bg-violet-900"></span>
            <span className="block h-1 w-8 animate-pulse bg-violet-900"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav " : "hideMenuNav"}>
            {/* toggle class based on isNavOpen state */}
            <div
              className="absolute top-0 right-0 px-9 py-8 cursor-pointer"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-10 w-10 text-violet-900 animate-pulse "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="text-xl my-8 uppercase text-indigo-900 hover:text-indigo-400 ">
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </li>
              <li className="text-xl my-8 uppercase text-indigo-900 hover:text-indigo-400 ">
                <NavLink
                  to="/todo"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Todo's
                </NavLink>
              </li>
              <li className="text-xl my-8 uppercase text-indigo-900 hover:text-indigo-400 ">
                <NavLink
                  to="/calendar"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Calendar
                </NavLink>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-16 md:flex">
          <li className="text-xl uppercase text-indigo-900 hover:text-indigo-400 relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-indigo-400 after:bottom-0 after:left-0 after:translate-y-5 after:opacity-0 after:invisible hover:after:visible hover:after:translate-y-0 hover:after:opacity-100  after:transition-all ">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl uppercase text-indigo-900 hover:text-indigo-400 relative after:absolute after:content-[''] after:w-full after:h-0.5 after:bg-indigo-400 after:bottom-0 after:left-0 after:translate-y-5 after:opacity-0 after:invisible hover:after:visible hover:after:translate-y-0 hover:after:opacity-100  after:transition-all ">
            <NavLink
              to="/todo"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Todo's
            </NavLink>
          </li>
          <li className=" text-xl uppercase text-indigo-900 hover:text-indigo-400 relative after:absolute after:content-[''] after:w-full after:h-0.5  after:bg-indigo-400 after:bottom-0 after:left-0 after:translate-y-8 after:opacity-0 after:invisible hover:after:visible hover:after:translate-y-0 hover:after:opacity-100  after:transition-all ">
            <NavLink
              to="/calendar"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Calendar
            </NavLink>
          </li>
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          background-color: rgb(250 245 255);
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding-top: 80px;
          animation : comeInTop 0.4s ;
          overflow-x : hidden;
        }
      `}</style>
    </div>
  );
};

export default Nav;
