import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
