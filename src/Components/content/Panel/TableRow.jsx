import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
const TableRow = ({ course, onDelete, onAdd }) => {
  const { id, icon: courseIcon, name, price, teacher, data } = course;
  const { pathname } = useLocation();
  return (
    <tr className="border-b text-lite-purple">
      <td className="px-xl py-4 font-medium text-center hidden lg:table-cell">
        <img src={courseIcon} className="w-12 mx-auto" />
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center">
        {name}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center hidden sm:table-cell">
        {teacher}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4  text-center">
        {price}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center hidden lg:table-cell">
        {data}
      </td>
      <td
        className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center"
        onClick={
          pathname === '/user-panel/myCourses'
            ? () => onDelete(id)
            : () => onAdd(course)
        }
      >
        {pathname === '/user-panel/myCourses' ? (
          <FaTrashAlt className="mx-auto hover:text-red-500 transition ease-in-out duration-300" />
        ) : (
          <FaTrashAlt className="mx-auto hover:text-green-500 transition ease-in-out duration-300" />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
