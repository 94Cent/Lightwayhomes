import React, { useState } from "react";
import { menuItemsData } from "./menuItemsData";
import { Link } from "react-router-dom";
import CustomNavLink from "components/CustomNavLink";

const MobileNavBar = ({ setIsOpen }) => {
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleSubMenu = (index) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const resetMenu = () => {
    setExpandedMenus({});
    setIsOpen(false);
  };

  const renderSubMenu = (submenu, depthLevel = 0) => {
    return (
      <ul className={`pl-${depthLevel * 4} mt-2`}>
        {submenu.map((item, index) => (
          <li key={index} className="mb-2">
            {item.submenu ? (
              <>
                <button
                  onClick={() => toggleSubMenu(`${depthLevel}-${index}`)}
                  className="w-full text-left flex justify-between items-center p-2 border-b border-purple rounded-md"
                >
                  {item.title}
                  <span className="text-sm">
                    {expandedMenus[`${depthLevel}-${index}`] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {expandedMenus[`${depthLevel}-${index}`] &&
                  renderSubMenu(item.submenu, depthLevel + 1)}
              </>
            ) : (
              <CustomNavLink
                to={item.url}
                className="block p-2 border-b border-purple rounded-md"
                onClick={resetMenu}
              >
                {item.title}
              </CustomNavLink>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="lg:hidden">
      <div className="p-4">
        {menuItemsData.map((item, index) => (
          <div key={index} className="mb-2">
            {item.submenu ? (
              <>
                <button
                  onClick={() => toggleSubMenu(`${index}`)}
                  className="w-full text-left flex justify-between items-center p-2 border-b border-purple hover:bg-purple hover:text-white rounded-md"
                >
                  {item.title}
                  <span className="text-sm">
                    {expandedMenus[`${index}`] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                {expandedMenus[`${index}`] && renderSubMenu(item.submenu, 1)}
              </>
            ) : (
              <CustomNavLink
                to={item.url}
                className="block p-2 border-b border-purple rounded-md"
                onClick={resetMenu}
              >
                {item.title}
              </CustomNavLink>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavBar;
