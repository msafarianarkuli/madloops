import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Core/context/cart.context";

const CartHover = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <div
      className="md:grid hidden w-96 min-h-fit h-[155px] overflow-y-scroll dark:border-white-secondary border-[1px] fixed top-[56px] left-48 z-40 rounded-md"
      style={{
        opacity: !isCartOpen ? "0" : "1",
        visibility: !isCartOpen ? "hidden" : "visible",
        transition: "all ease-in 200ms",
      }}
      onMouseEnter={() => setIsCartOpen(isCartOpen)}
      onMouseLeave={() => setIsCartOpen(!isCartOpen)}
    >
      {cartItems.map((item) => {
        return (
          <div
            className="w-full h-full flex border-b-2 dark:bg-dark-secondary bg-white p-2"
            key={item.id}
          >
            <div className="w-20 p-2 h-20 my-auto">
              <img src={item.image} className="w-full h-full" />
            </div>
            <div className="flex flex-col my-auto mr-4">
              <h1 className="dark:text-gray-100">{item.title}</h1>
              <h4 className="dark:text-gray-400">{item.teacher}</h4>
              <p className="dark:text-gray-500">{item.price}تومان</p>
            </div>
          </div>
        );
      })}

      {cartItems.length === 0 ? (
        <div className="w-full h-full text-center font-bold bg-white relative">
          <img
            className=""
            src={require("../../../Assets/img/cart-emptybg.JPG")}
            alt=""
          />
          <h2 className="absolute text-deep-purple bottom-12 right-16 text-3xl">
            سبد خرید شما خالی است
          </h2>
        </div>
      ) : (
        <Link
          className="text-center w-full h-fit text-2xl p-3 dark:text-dark-primary dark:bg-gray-500 text-white cursor-pointer rounded-b-md bg-[#00bfd6]"
          to="/cart"
        >
          مشاهده سبد خرید
        </Link>
      )}
    </div>
  );
};

export default CartHover;
