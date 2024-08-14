import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, children, className, ...props }) => {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        `text-purple hover:bg-purple hover:text-white ${className} ${isActive ? 'font-bold lg:bg-transparent lg:text-purple bg-purple text-white' : 'font-normal'}`
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
