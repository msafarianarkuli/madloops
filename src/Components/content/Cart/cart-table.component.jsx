import React from 'react';
import Data from './../../../Core/services/Fake Service/DashCoursesList';
import TableRow from './../Panel/TableRow';
import { FaTrashAlt } from 'react-icons/fa';

const CartTable = ({ Data }) => {
  return (
    <table className="min-w-full">
      <thead className="text-base lg:text-xl font-bold bg-[#f8f8f8]">
        <tr>
          <th
            scope="col"
            className="text-gray-900 py-4 hidden lg:block"
          >
            تصویر
          </th>
          <th scope="col" className="text-gray-900 py-4">
            نام دوره
          </th>
          <th
            scope="col"
            className="text-gray-900 py-4 hidden sm:block"
          >
            مدرس
          </th>
          <th scope="col" className="text-gray-900 py-4">
            قیمت
          </th>
          <th
            scope="col"
            className="text-gray-900 py-4 hidden lg:block"
          >
            تاریخ آغاز
          </th>
          <th scope="col" className="text-gray-900 py-4">
            حذف
          </th>
        </tr>
      </thead>
      <tbody>
        {Data.map((course) => (
          <TableRow
            key={course.id}
            course={course}
            icon={<FaTrashAlt className="mx-auto" />}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
