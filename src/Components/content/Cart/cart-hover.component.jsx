import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Core/context/cart.context";

const CartHover = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className="md:flex md:flex-col md:justify-center hidden w-96 h-52 border-[1px] absolute top-16 left-36 z-40 overflow-y-auto  rounded-b-md">
        {cartItems.map((item) => {
          return (
            <div
              className="w-full h-full flex border-b-2 bg-white p-2"
              key={item.id}
            >
              <div className="w-20 p-2 h-20 my-auto">
                <img src={item.image} className="w-full h-full" />
              </div>
              <div className="flex flex-col my-auto mr-4">
                <h1>{item.title}</h1>
                <h4>{item.teacher}</h4>
                <p>
                  {item.quantity} {item.price}تومان
                </p>
              </div>
            </div>
          );
        })}

        {cartItems.length === 0 ? (
          <h2 className="w-full h-full text-center text-4xl font-bold bg-white flex justify-center items-center ">
            سبد خرید شما خالی است
          </h2>
        ) : (
          <Link
            className="text-center w-full h-fit text-2xl p-3 text-white cursor-pointer rounded-b-md bg-[#00bfd6]"
            to="/cart"
          >
            مشاهده سبد خرید
          </Link>
        )}
      </div>
    </>
  );
};

export default CartHover;
