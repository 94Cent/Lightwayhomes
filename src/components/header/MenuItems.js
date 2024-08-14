// MenuItems.js
import Dropdown from "./Dropdown";
import CustomNavLink from "components/CustomNavLink";
import { useState, useEffect, useRef } from "react";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

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
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  const rightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li
      className="relative hover:bg-purple hover:text-white"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            className={`flex items-center w-full justify-between text-left text-nowrap px-4 py-2 hover:bg-purple hover:text-white ${
              depthLevel > 0 && "border-b border-purple"
            }`}
            onClick={() => setDropdown(!dropdown)}
          >
            <CustomNavLink to={items.url}>{items.title}</CustomNavLink>
            <span className="ml-2">
              {depthLevel > 0 ? rightIcon : downIcon}
            </span>
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            className={`flex items-center w-full text-left px-4 py-2 hover:bg-purple hover:text-white ${
              depthLevel > 0
                ? "border-b border-purple"
                : "border-b border-purple"
            }`}
            onClick={() => setDropdown(!dropdown)}
          >
            {items.title}
            <span className="ml-2 hover:text-white">{depthLevel > 0 ?  rightIcon : downIcon}</span>
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <CustomNavLink
          to={items.url}
          className={`${
            depthLevel > 0 && "border-b border-purple w-52"
          } block px-4 py-2`}
        >
          {items.title}
        </CustomNavLink>
      )}
    </li>
  );
};

export default MenuItems;
