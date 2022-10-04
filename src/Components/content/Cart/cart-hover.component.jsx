import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../Core/context/cart.context';

const CartHover = () => {
  const { cartItems, isCartOpen, setIsCartOpen } =
    useContext(CartContext);

  return (
    <div
      onMouseOver={() => setIsCartOpen(isCartOpen)}
      onMouseOut={() => setIsCartOpen(!isCartOpen)}
      className={`md:grid hidden w-96 h-300 border-[1px] fixed top-12 left-48 z-40 overflow-y-scroll
        faq-container rounded-md`}
      style={{
        opacity: !isCartOpen ? '0' : '1',
        visibility: !isCartOpen ? 'hidden' : 'visible',
        transition: 'all ease-in-out 200ms',
      }}
    >
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
              <p>{item.price}تومان</p>
            </div>
          </div>
        );
      })}

      {cartItems.length === 0 ? (
        <div className="w-full h-full text-center font-bold bg-white relative">
          <img
            className=""
            src={require('../../../Assets/img/cart-emptybg.JPG')}
            alt=""
          />
          <h2 className="absolute text-deep-purple bottom-12 right-16 text-3xl">
            سبد خرید شما خالی است
          </h2>
        </div>
      ) : (
        <Link
          className="text-center w-full h-fit text-2xl p-3 text-white cursor-pointer rounded-b-md bg-[#00bfd6]"
          to="/cart"
        >
          مشاهده سبد خرید
        </Link>
      )}
    </div>
  );
};

export default CartHover;
