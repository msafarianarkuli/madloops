import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const TableRow = () => {
  return (
    <tr className="border-b text-lite-purple">
      <td className="px-xlpy-4 whitespace-nowrap text-sm font-medium text-center">
        <img src="" alt="" />
      </td>
      <td className="text-xl font-light px-6 py-4 whitespace-nowrap text-center">
        ری اکت مقدماتی تا پیشرفته
      </td>
      <td className="text-xl font-light px-6 py-4 whitespace-nowrap text-center">
        بحرالعلوم
      </td>
      <td className="text-xl font-light px-6 py-4 whitespace-nowrap text-center">
        200.000
      </td>
      <td className="text-xl font-light px-6 py-4 whitespace-nowrap text-center">
        1401/05/12
      </td>
      <td className="text-xl font-light px-6 py-4 whitespace-nowrap">
        <FaTrashAlt className="mx-auto" />
      </td>
    </tr>
  );
};

export default TableRow;
