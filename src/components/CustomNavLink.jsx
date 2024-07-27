import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ to, children, className, ...props }) => {
  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        `text-purple ${className} ${isActive ? 'font-bold' : 'font-normal'}`
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
