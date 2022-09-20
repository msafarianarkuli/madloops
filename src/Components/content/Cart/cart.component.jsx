import React from "react";
import CartTable from "./cart-table.component";
import Data from "./../../../Core/services/Fake Service/DashCourses";
import { Button } from "./../../common/button-component/button.component";

const CartPage = () => {
  return (
    <div className="w-[95%] m-auto border-2 mt-10 rounded-md">
      <CartTable Data={Data} />
      <div className="flex justify-between">
        <div className="font-bold text-black text-xl p-5">
          قیمت کل محصولات:
          {Data.reduce((a, b) => a + b.price, 0)} تومان
        </div>
        <Button className="btn btn-primary rounded-none text-xl">
          ورود و ثبت سفارش
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
