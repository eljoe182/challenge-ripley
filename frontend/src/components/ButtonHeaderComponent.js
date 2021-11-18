import React from 'react';
import { NavLink } from 'react-router-dom';

const ButtonHeaderComponent = ({ children, href }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) => isActive ?
        "bg-blue-900 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium" :
        "text-white hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      }>
      {children}
    </NavLink>
  )
}

export default ButtonHeaderComponent;
