import React from "react";
import CartTable from "./cart-table.component";
import { Button } from "./../../common/button-component/button.component";
import { resetItem, selectCartTotalPrice } from "../../../store/cart/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartTotal = useSelector(selectCartTotalPrice);
  const clearCartItem = () => dispatch(resetItem);

  return (
    <div className="dark:bg-dark-primary w-full h-96">
      <div className="py-12">
        <div className="w-[95%] m-auto border-2 dark:border-dark-tertiary rounded-lg dark:bg-dark-secondary">
          <CartTable />
          <div className="sm:flex w-full justify-between dark:bg-dark-secondary bg-[#f8f8f8] rounded-lg">
            <div className="font-bold text-black dark:text-gray-400 text-xl p-5">
              قیمت کل محصولات: {cartTotal} تومان
            </div>
            <div className="sm:flex">
              <Button
                className="sm:w-fit w-2/5 btn btn-danger rounded-none sm:rounded-none rounded-br-md md:text-2xl text-lg sm:text-xl h-full dark:text-dark-primary"
                onClick={clearCartItem}
              >
                حذف همه
              </Button>
              <Button className="sm:w-fit w-3/5 btn btn-primary rounded-none md:text-2xl sm:text-xl text-lg h-full rounded-bl-md dark:text-dark-primary">
                ورود و ثبت سفارش
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
