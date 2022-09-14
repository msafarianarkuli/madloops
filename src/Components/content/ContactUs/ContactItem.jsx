import React from 'react';
import { NavLink } from 'react-router-dom';

const ContactItem = ({ icon, title, to }) => {
  return (
    <NavLink to={to}>
      <div
        className="flex flex-col justify-center items-center rounded-2xl py-3 sm:py-6 lg:py-14
    hover:bg-[#7F56DA] transition ease-in duration-200 cursor-pointer parent-hover:text-white group"
      >
        {icon}
        <p className="text-[#7F56DA] text-base sm:text-xl font-bold group-hover:text-white">
          {title}
        </p>
      </div>
    </NavLink>
  );
};

export default ContactItem;
