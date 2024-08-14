// Navbar.js
import { menuItemsData } from "./menuItemsData";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const depthLevel = 0;

  return (
    <nav className="space-x-6 ml-2 lg:flex justify-between items-center w-[55%] text-purple hidden">
      <ul className="flex space-x-4">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;