import React from "react";
import { useLocation } from "react-router-dom";
import TableRow from "./TableRow";

const PanelTable = ({ data, onDelete, onAdd }) => {
  const { pathname } = useLocation();
  return (
    <table className="min-w-full animate-[onLoadPanel_1s_ease-in] relative">
      <thead className="border-b dark:border-dark-tertiary text-base lg:text-xl font-bold">
        <tr>
          <th
            scope="col"
            className="text-gray-900 py-4 hidden sm:block dark:text-dark-secondary-title"
          >
            تصویر
          </th>
          <th
            scope="col"
            className="text-gray-900 py-4 dark:text-dark-secondary-title"
          >
            نام دوره
          </th>
          <th
            scope="col"
            className="text-gray-900 py-4 hidden sm:block dark:text-dark-secondary-title"
          >
            مدرس
          </th>
          <th
            scope="col"
            className="text-gray-900 py-4 dark:text-dark-secondary-title"
          >
            قیمت
          </th>
          <th
            scope="col"
            className="text-gray-900 py-4 hidden lg:block dark:text-dark-secondary-title"
          >
            تاریخ آغاز
          </th>
          <th
            scope="col"
            className="text-gray-900 py-4 dark:text-dark-secondary-title"
          >
            {pathname === "/user-panel/courseList" ? "افزودن" : "حذف"}
          </th>
        </tr>
      </thead>

      {data.length > 0 ? (
        <tbody>
          {data.map((course) => (
            <TableRow
              key={course._id}
              course={course}
              onDelete={onDelete}
              onAdd={onAdd}
            />
          ))}
        </tbody>
      ) : (
        <div className=" absolute right-[38%]">
          <img
            className="w-72 mt-12"
            src={require("../../../Assets/img/mic.jpg")}
          />
        </div>
      )}
    </table>
  );
};

export default PanelTable;
