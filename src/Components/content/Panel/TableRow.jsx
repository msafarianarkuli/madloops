import React from 'react';

const TableRow = ({ course, icon }) => {
  const { id, icon: courseIcon, name, price, teacher, data } = course;
  return (
    <tr className="border-b text-lite-purple">
      <td className="px-xl py-4 whitespace-nowrap font-medium text-center hidden lg:table-cell">
        <img src={courseIcon} className="w-12 mx-auto" />
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 whitespace-nowrap text-center">
        {name}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 whitespace-nowrap text-center hidden sm:table-cell">
        {teacher}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 whitespace-nowrap text-center">
        {price}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 whitespace-nowrap text-center hidden lg:table-cell">
        {data}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 whitespace-nowrap">
        {icon}
      </td>
    </tr>
  );
};

export default TableRow;
