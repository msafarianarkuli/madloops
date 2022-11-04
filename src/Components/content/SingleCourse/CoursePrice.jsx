import React from "react";
import { FaCoins } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookMark,
  selectBookMarkItems,
} from "../../../store/bookmark/bookmarkSlice";
import { addItem, selectCartItems } from "../../../store/cart/cartSlice";
import { Button } from "./../../common/button-component/button.component";

const CoursePrice = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const bookMarkItems = useSelector(selectBookMarkItems);

  const addProductToCart = () => dispatch(addItem(cartItems, item));
  const addProductForSave = () => dispatch(addBookMark(bookMarkItems, item));

  return (
    <div className="course-Detail-container" data-aos="fade-up">
      <div className="course-detail-title-box">
        <p className="course-detail-title">قیمت</p>
      </div>
      <div className="course-detail-item-odd">
        <div className="flex items-center">
          <FaCoins />
          <p className="mr-3">قیمت دوره:</p>
        </div>
        <div>
          <p>
            <del className="line-through decoration-red-600">
              {item?.cost} تومان
            </del>
          </p>
        </div>
      </div>
      <div className="flex justify-between text-gray-400 bg-[#F9F9FF] text-lg py-2 px-5 dark:bg-dark-secondary dark:text-dark-text">
        <div className="flex items-center">
          <TbDiscount2 />
          <p className="mr-3">قیمت دوره با تخفیف:</p>
        </div>
        <div>
          <p className="text-[#42CD36]">{item?.cost} تومان</p>
        </div>
      </div>
      <div className="flex justify-center text-gray-400 text-lg py-2 px-5 bg-[#E8E8E8] dark:bg-dark-tertiary dark:text-dark-text">
        <div>
          <p className="text-[#42CD36]">09:34:50:28</p>
        </div>
      </div>
      <div
        className="flex justify-center text-gray-400 text-lg py-2 px-5 bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-600 cursor-pointer dark:hover:bg-zinc-700 duration-300"
        onClick={addProductForSave}
      >
        <div>
          <Button classButton="text-white">افزودن به علاقه مندی</Button>
        </div>
      </div>
      <div
        className="flex justify-center text-gray-400 text-lg py-2 px-5 bg-[#42CD36] cursor-pointer hover:bg-green-600 duration-300"
        onClick={addProductToCart}
      >
        <div>
          <Button classButton="text-white">افزودن به سبد خرید</Button>
        </div>
      </div>
    </div>
  );
};

export default CoursePrice;
