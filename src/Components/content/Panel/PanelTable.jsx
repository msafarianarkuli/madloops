import React from 'react';

import TableRow from './TableRow';
const PanelTable = ({ data, icon }) => {
  return (
    <table className="min-w-full mt-10">
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
            حذف
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((course) => (
          <TableRow key={course.id} course={course} icon={icon} />
        ))}
      </tbody>
    </table>
  );
};

export default PanelTable;
