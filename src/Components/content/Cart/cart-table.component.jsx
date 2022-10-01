import React, { useContext } from "react";

import TableBody from "./table-body.component";
import { CartContext } from "../../../Core/context/cart.context";

const CartTable = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <table className="min-w-full h-fit">
      <thead className="text-base lg:text-xl font-bold bg-[#f8f8f8]">
        <tr>
          <th scope="col" className="text-gray-900 py-4 hidden lg:block">
            تصویر
          </th>
          <th scope="col" className="text-gray-900 py-4">
            نام دوره
          </th>
          <th scope="col" className="text-gray-900 py-4 hidden sm:block">
            مدرس
          </th>
          <th scope="col" className="text-gray-900 py-4">
            قیمت
          </th>
          <th scope="col" className="text-gray-900 py-4 hidden lg:block">
            تاریخ آغاز
          </th>
          <th scope="col" className="text-gray-900 py-4">
            حذف
          </th>
        </tr>
      </thead>
      {cartItems.length === 0 ? (
        <div className="text-5xl text-center">سبد خرید شما خالی است.</div>
      ) : (
        <tbody>
          {cartItems.map((course) => (
            <TableBody key={course.id} course={course} />
          ))}
        </tbody>
      )}
    </table>
  );
};

export default CartTable;
