import React from 'react';
import { NavLink } from 'react-router-dom';
const DashMenuItem = ({ items }) => {
  const { icon, title, path } = items;
  return (
    <div className="bg-white flex items-center my-4 text-2xl text-gray-500">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? 'rounded-2xl p-4 flex items-center w-full custom-shadow text-lite-purple  '
            : 'rounded-2xl p-4 flex items-center w-full'
        }
      >
        <span>{icon}</span>
        <span className="mr-6">{title}</span>
      </NavLink>
    </div>
  );
};

export default DashMenuItem;
