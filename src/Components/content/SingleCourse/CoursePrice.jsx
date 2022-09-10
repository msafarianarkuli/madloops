import React from 'react';
import { FaCoins } from 'react-icons/fa';
import { TbDiscount2 } from 'react-icons/tb';
const CoursePrice = () => {
  return (
    <div className="course-Detail-container">
      <div className="course-detail-title-box">
        <p className="course-detail-title">قیمت</p>
      </div>
      <div className="flex justify-between text-gray-400 text-lg py-2 px-5 bg-zinc-200">
        <div className="flex items-center">
          <FaCoins />
          <p className="mr-3">قیمت دوره:</p>
        </div>
        <div>
          <p>
            <del className="line-through decoration-red-600">
              200،000 تومان
            </del>
          </p>
        </div>
      </div>
      <div className="flex justify-between text-gray-400 bg-zinc-50 text-lg py-2 px-5">
        <div className="flex items-center">
          <TbDiscount2 />
          <p className="mr-3">قیمت دوره با تخفیف:</p>
        </div>
        <div>
          <p className="text-green-500">200،000 تومان</p>
        </div>
      </div>
      <div className="flex justify-center text-gray-400 text-lg py-2 px-5 bg-zinc-200">
        <div>
          <p className="text-green-500">09:34:50:28</p>
        </div>
      </div>
      <div className="flex justify-center text-gray-400 text-lg py-2 px-5 bg-green-500 cursor-pointer">
        <div>
          <p className="text-white">ثبت نام</p>
        </div>
      </div>
    </div>
  );
};

export default CoursePrice;
