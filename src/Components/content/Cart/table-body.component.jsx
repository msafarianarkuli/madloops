import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { removeItem, selectCartItems } from "../../../store/cart/cartSlice";
import TableSkeleton from "../../common/Skeleton/TableSkeleton";
import { useDispatch, useSelector } from "react-redux";

const TableBody = ({ course }) => {
  const { title, cost, teacher, date, lesson } = course;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const removeItems = () => dispatch(removeItem(cartItems, course));

  return loading ? (
    <TableSkeleton />
  ) : (
    <tr className="border-b text-lite-purple group hover:bg-zinc-50 hover:shadow-sm hover:-translate-y-1 transition ease-in-out duration-200">
      <td className="px-xl py-4 font-medium text-center hidden lg:table-cell">
        <img src={lesson.image} className="w-12 mx-auto h-10" />
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center">
        {title}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center hidden sm:table-cell">
        {teacher.fullName}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4  text-center">
        {cost}
      </td>
      <td className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center hidden lg:table-cell">
        {date}
      </td>
      <td
        className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center cursor-pointer"
        onClick={removeItems}
      >
        <FaTrashAlt className="mx-auto hover:text-red-500 transition ease-in-out duration-300" />
      </td>
    </tr>
  );
};

export default TableBody;
