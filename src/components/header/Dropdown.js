// Dropdown.js
import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "left-full top-0" : "";

  return (
    <ul
      className={`${
        dropdown ? "block" : "hidden"
      } absolute bg-white rounded-xl shadow-lg px-2 py-4 w-56 z-20 text-center ${dropdownClass}`}
    >
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;