import React from 'react';

import TableRow from './TableRow';
const CoursesList = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b text-xl font-bold">
                <tr>
                  <th scope="col" className="text-gray-900 py-4">
                    تصویر
                  </th>
                  <th scope="col" className="text-gray-900 py-4">
                    نام دوره
                  </th>
                  <th scope="col" className="text-gray-900 py-4">
                    مدرس
                  </th>
                  <th scope="col" className="text-gray-900 py-4">
                    قیمت
                  </th>
                  <th scope="col" className="text-gray-900 py-4">
                    تاریخ آغاز
                  </th>
                  <th scope="col" className="text-gray-900 py-4">
                    حذف
                  </th>
                </tr>
              </thead>
              <tbody>
                <TableRow />
                <TableRow />
                <TableRow />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
