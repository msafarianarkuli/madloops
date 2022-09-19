import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const DashMenuItemLg = ({ items }) => {
  const { icon, title, path } = items;
  const location = useLocation();
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? 'bg-white rounded-md lg:rounded-xl my-4 p-2 flex shadow-purple text-lite-purple'
          : 'bg-white rounded-md lg:rounded-xl my-4 text-gray-500 p-2 flex'
      }
    >
      <span className="text-2xl">{icon}</span>
      <span className="hidden md:inline mr-2 lg:mr-2 xl:mr-6 text-sm md:text-lg xl:text-2xl">
        {title}
      </span>
    </NavLink>
  );
};

const DashMenuItemSm = ({ items }) => {
  const { icon, title, path } = items;
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? 'bg-white rounded-md lg:rounded-2xl px-2 py-1 sm:px-3 sm:py-2 mx-1 sm:mx-4 shadow-purple text-lite-purple'
          : 'bg-white rounded-md lg:rounded-2xl px-2 py-1 sm:px-3 sm:py-2 mx-1 sm:mx-4 shadow-purple text-lite-purple'
      }
    >
      {icon}
    </NavLink>
  );
};

export { DashMenuItemLg, DashMenuItemSm };
