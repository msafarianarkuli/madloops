import React from "react";
import TableBody from "./table-body.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../store/cart/cartSlice";
import { selectCurrentUser } from "../../../store/auth/authSlice";
import { selectSessionCurrentUser } from "./../../../store/auth/authSessionSlice";

const CartTable = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentSessionUser = useSelector(selectSessionCurrentUser);
  const cartItems = useSelector(selectCartItems);

  return (
    <table className="min-w-full h-fit dark:bg-dark-primary">
      <thead className="text-base lg:text-xl font-bold bg-[#f8f8f8] dark:bg-dark-secondary">
        <tr>
          <th
            scope="col"
            className="text-gray-900 dark:text-gray-400 py-4 hidden lg:block"
          >
            تصویر
          </th>
          <th scope="col" className="text-gray-900 dark:text-gray-400 py-4">
            نام دوره
          </th>
          <th
            scope="col"
            className="text-gray-900 dark:text-gray-400 py-4 hidden sm:block"
          >
            مدرس
          </th>
          <th scope="col" className="text-gray-900 dark:text-gray-400 py-4">
            قیمت
          </th>
          <th
            scope="col"
            className="text-gray-900 dark:text-gray-400 py-4 hidden lg:block"
          >
            تاریخ آغاز
          </th>
          {currentUser || currentSessionUser ? (
            <th scope="col" className="text-gray-900 dark:text-gray-400 py-4">
              افزودن
            </th>
          ) : null}
          <th scope="col" className="text-gray-900 dark:text-gray-400 py-4">
            حذف
          </th>
        </tr>
      </thead>
      {cartItems.length === 0 ? (
        <tbody className="text-4xl text-center">
          <tr>
            <td className="text-deep-purple dark:text-lite-purple py-14">
              سبد خرید شما خالی است.
            </td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          {cartItems.map((course) => {
            return <TableBody key={course._id} course={course} />;
          })}
        </tbody>
      )}
    </table>
  );
};

export default CartTable;
