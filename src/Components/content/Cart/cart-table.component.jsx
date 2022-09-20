import React from 'react';
import TableRow from './../Panel/TableRow';
import { FaTrashAlt } from 'react-icons/fa';

const CartTable = ({ data, onDelete }) => {
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
        {data.map((course) => (
          <TableRow
            key={course.id}
            course={course}
            icon={<FaTrashAlt className="mx-auto" />}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
