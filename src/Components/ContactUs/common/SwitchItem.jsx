import React from 'react';
import {
  BsEnvelopeFill,
  BsTelephoneFill,
  BsGeoAltFill,
} from 'react-icons/bs';

const SwitchItem = ({ icon, children }) => {
  //   switch (icon) {
  //     case 'BsEnvelopeFill':
  //       return (
  //         <BsEnvelopeFill className="text-3xl text-[#7F56DA] group-hover:text-white mb-3" />
  //       );
  //       break;
  //     case 'BsTelephoneFill':
  //       return (
  //         <BsTelephoneFill className="text-3xl text-[#7F56DA] group-hover:text-white mb-3" />
  //       );
  //       break;
  //     case 'BsGeoAltFill':
  //       return (
  //         <BsGeoAltFill className="text-3xl text-[#7F56DA] group-hover:text-white mb-3" />
  //       );
  //       break;

  //     default:
  //       break;
  //   }
  return (
    <div
      className="flex flex-col justify-center items-center rounded-2xl py-14 border-2 border-[#7F56DA]
    hover:bg-[#7F56DA] transition ease-in duration-200 cursor-pointer parent-hover:text-white group"
    >
      {icon}
      <p className="text-[#7F56DA] group-hover:text-white">
        {children}
      </p>
    </div>
  );
};

export default SwitchItem;

// flex flex-col justify-center items-center bg-[#7F56DA] rounded-2xl py-14
//text-[#7F56DA]
