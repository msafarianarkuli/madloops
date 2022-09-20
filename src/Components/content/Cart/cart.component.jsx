import React, { useState } from "react";
import CartTable from "./cart-table.component";
import Data from "./../../../Core/services/Fake Service/DashCoursesList";
import { Button } from "./../../common/button-component/button.component";

const CartPage = () => {
  const [data, setData] = useState(Data);

  const handleDelete = (id) => {
    setData(data.filter((course) => course.id !== id));
  };
  return (
    <div className="w-[95%] m-auto border-2 mt-10 rounded-md">
      <CartTable data={data} onDelete={handleDelete} />
      <div className="flex justify-between">
        <div className="font-bold text-black text-xl p-5">
          قیمت کل محصولات:
          {data.reduce((a, b) => a + b.price, 0)} تومان
        </div>
        <Button className="btn btn-primary rounded-none text-xl">
          ورود و ثبت سفارش
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
