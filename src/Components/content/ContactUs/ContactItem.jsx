import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ContactItem = ({ icon, title, to }) => {
  const location = useLocation();
  return (
    <Link to={to}>
      <div
        className={`${
          location.pathname === to ? 'bg-[#7F56DA]' : ''
        } flex flex-col justify-center items-center rounded-2xl py-3 sm:py-6 lg:py-14
    hover:bg-[#7F56DA] transition ease-in duration-200 cursor-pointer parent-hover:text-white group`}
      >
        <span
          className={`${
            location.pathname === to ? 'text-white' : 'text-[#7F56DA]'
          }`}
        >
          {icon}
        </span>
        <p
          className={`${
            location.pathname === to ? 'text-white' : 'text-[#7F56DA]'
          }  text-base sm:text-xl font-bold group-hover:text-white`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

export default ContactItem;
