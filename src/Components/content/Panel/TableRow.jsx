import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import TableSkeleton from "../../common/Skeleton/TableSkeleton";
import { useDispatch } from "react-redux";
import { removeBookMark } from "../../../store/bookmark/bookmarkSlice";

const TableRow = ({ course, onDelete, onAdd }) => {
  const dispatch = useDispatch();
  const { _id, title, cost, teacher, lesson } = course;
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  console.log(_id);
  return loading ? (
    <TableSkeleton />
  ) : (
    <tr
      className="group border-b text-lite-purple group transition ease-in duration-200
    hover:bg-zinc-50 hover:shadow-sm hover:border-b-0 hover:-translate-y-1
    dark:hover:bg-dark-tertiary"
    >
      <td className="px-xl py-4 font-medium text-center hidden sm:table-cell">
        <img
          src={lesson.image}
          className="w-12 mx-auto group-hover:rotate-[360deg] duration-700"
        />
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
        1400/03/03
      </td>
      <td
        className="text-base lg:text-xl font-light px-3 md:px-6 py-4 text-center cursor-pointer"
        onClick={
          pathname === "/user-panel/myCourses" || pathname === "/cart"
            ? () => onDelete(_id)
            : () => onAdd(_id)
        }
        // onClick={() => dispatch(onDelete(_id))}
      >
        {pathname === "/user-panel/myCourses" || pathname === "/cart" ? (
          <FaTrashAlt className="mx-auto hover:text-red-500 transition ease-in-out duration-300" />
        ) : (
          <MdPostAdd className="mx-auto group-hover:text-green-500 transition ease-in-out duration-300 text-3xl" />
        )}
      </td>
    </tr>
  );
};

export default TableRow;
