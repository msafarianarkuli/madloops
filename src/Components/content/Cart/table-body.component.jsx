import { set } from 'lodash';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import TableSkeleton from '../../common/Skeleton/TableSkeleton';
import { CartContext } from './../../../Core/context/cart.context';

const TableBody = ({ course }) => {
  const { removeItemFromCart } = useContext(CartContext);
  const { title, price, teacher, date, image } = course;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const removeItem = () => removeItemFromCart(course);
  return loading ? (
    <TableSkeleton />
  ) : (
    <tr className="border-b text-lite-purple group hover:bg-zinc-50 hover:shadow-sm hover:-translate-y-1 transition ease-in-out duration-200">
      <td className="px-xl py-4 font-medium text-center hidden lg:table-cell">
        <img src={image} className="w-12 mx-auto h-10" />
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center">
        {title}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center hidden sm:table-cell">
        {teacher}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4  text-center">
        {price}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center hidden lg:table-cell">
        {date}
      </td>
      <td
        className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center cursor-pointer"
        onClick={removeItem}
      >
        <FaTrashAlt className="mx-auto hover:text-red-500 transition ease-in-out duration-300" />
      </td>
    </tr>
  );
};

export default TableBody;
