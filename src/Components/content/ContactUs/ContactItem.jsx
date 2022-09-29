import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ContactItem = ({ icon, title, to }) => {
  const location = useLocation();
  return (
    <Link to={to}>
      <div
        className={`${
          location.pathname === to ? 'bg-lite-purple' : ''
        } flex flex-col justify-center items-center m-auto rounded-2xl py-3 sm:py-6 lg:py-8 lg:w-52 sm:w-36 w-24
    hover:bg-lite-purple transition ease-in duration-200 cursor-pointer parent-hover:text-white group`}
      >
        <span
          className={`${
            location.pathname === to
              ? 'text-white'
              : 'text-lite-purple'
          }`}
        >
          {icon}
        </span>
        <p
          className={`${
            location.pathname === to
              ? 'text-white'
              : 'text-lite-purple'
          }  text-base sm:text-xl font-bold group-hover:text-white`}
        >
          {title}
        </p>
      </div>
    </Link>
  );
};

export default ContactItem;
