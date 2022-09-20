import React from 'react';
import { useLocation } from 'react-router-dom';
import TableRow from './TableRow';
const PanelTable = ({ data, onDelete, onAdd }) => {
  const { pathname } = useLocation();
  return (
    <table className="min-w-full ">
      <thead className="border-b text-base lg:text-xl font-bold">
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
            {pathname === '/user-panel/courseList' ? 'افزودن' : 'حذف'}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((course) => (
          <TableRow
            key={course.id}
            course={course}
            onDelete={onDelete}
            onAdd={onAdd}
          />
        ))}
      </tbody>
    </table>
  );
};

export default PanelTable;
