import React from 'react';
import { NavLink } from 'react-router-dom';
const DashMenuItem = ({ items }) => {
  const { icon, title, path } = items;
  return (
    // <div className="bg-white rounded-md lg:rounded-2xl flex items-center my-4 text-gray-500">
    //   <NavLink
    //     to={path}
    // className={({ isActive }) =>
    //   isActive
    //     ? 'rounded-md lg:rounded-2xl p-2 lg:p-3 md:flex md:items-center w-full custom-shadow text-lite-purple  '
    //     : 'rounded-md lg:rounded-2xl p-2 lg:p-3 md:flex md:items-center w-full'
    // }
    //   >
    //     <span className="text-2xl">{icon}</span>
    //     <span className="hidden md:inline mr-2 lg:mr-2 xl:mr-6 text-sm md:text-lg xl:text-2xl">
    //       {title}
    //     </span>
    //   </NavLink>
    // </div>

    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? 'bg-white rounded-md lg:rounded-2xl my-4 p-2 flex shadow-purple text-lite-purple'
          : 'bg-white rounded-md lg:rounded-2xl my-4 text-gray-500 p-2 flex'
      }
    >
      <span className="text-2xl">{icon}</span>
      <span className="hidden md:inline mr-2 lg:mr-2 xl:mr-6 text-sm md:text-lg xl:text-2xl">
        {title}
      </span>
    </NavLink>
  );
};

export default DashMenuItem;
