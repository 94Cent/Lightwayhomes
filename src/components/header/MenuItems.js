import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const downIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4 transition-transform duration-200"
      style={{ transform: dropdown ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  const rightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4 transition-transform duration-200"
      style={{ transform: dropdown ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const onMouseEnter = () => {
    window.innerWidth > 768 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 768 && setDropdown(false);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  return (
    <li
      className="relative"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className={`flex items-center w-full px-4 py-2 text-left hover:bg-purple hover:text-white ${
              depthLevel > 0 ? "border-b border-purple" : ""
            }`}
          >
            {items.url ? (
              <NavLink
                to={items.url}
                className={({ isActive }) =>
                  `flex-1 text-nowrap ${isActive ? "font-bold" : ""}`
                }
                onClick={closeDropdown}
              >
                {items.title}
              </NavLink>
            ) : (
              <span className="flex-1">{items.title}</span>
            )}
            <span className="ml-2">
              {depthLevel > 0 ? rightIcon : downIcon}
            </span>
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
            closeDropdown={closeDropdown}
          />
        </>
      ) : (
        <NavLink
          to={items.url}
          className={({ isActive }) =>
            `block px-4 py-2 hover:bg-purple hover:text-white ${
              depthLevel > 0 ? "border-b border-purple" : ""
            } ${isActive ? "font-bold" : ""}`
          }
          onClick={closeDropdown}
        >
          {items.title}
        </NavLink>
      )}
    </li>
  );
};

export default MenuItems;
