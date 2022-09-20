import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { MdPostAdd } from 'react-icons/md';
const TableRow = ({ course, onDelete, onAdd }) => {
  const { id, icon: courseIcon, name, price, teacher, data } = course;
  const { pathname } = useLocation();
  return (
    <tr className="border-b text-lite-purple group hover:bg-zinc-50 hover:shadow-sm hover:border-b-0 hover:-translate-y-1 transition ease-in-out duration-200">
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
        className="text-base lg:text-2xl font-light px-3 md:px-6 py-4 text-center"
        onClick={
          pathname === '/user-panel/myCourses'
            ? () => onDelete(id)
            : () => onAdd(course)
        }
      >
        {pathname === '/user-panel/myCourses' ? (
          <FaTrashAlt className="mx-auto group-hover:text-red-500 transition ease-in-out duration-300" />
        ) : (
          <MdPostAdd className="mx-auto group-hover:text-green-500 transition ease-in-out duration-300 text-3xl" />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
