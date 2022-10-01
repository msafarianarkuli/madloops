import React, { useContext } from "react";
import CartTable from "./cart-table.component";
import { Button } from "./../../common/button-component/button.component";
import { CartContext } from "./../../../Core/context/cart.context";

const CartPage = () => {
  const { cartTotal, clearCart, cartItems } = useContext(CartContext);

  const clearCartItem = () => clearCart(cartItems.length);

  return (
    <div className="w-[95%] m-auto border-2 mt-10 rounded-md">
      <CartTable />
      <div className="flex justify-between">
        <div className="font-bold text-black text-xl p-5">
          قیمت کل محصولات: {cartTotal} تومان
        </div>
        <div className="flex">
          <Button
            className="btn btn-danger rounded-none text-xl h-full"
            onClick={clearCartItem}
          >
            حذف همه
          </Button>
          <Button className="btn btn-primary rounded-none text-xl h-full rounded-bl-md">
            ورود و ثبت سفارش
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
