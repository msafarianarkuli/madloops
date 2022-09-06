import React from 'react';
import Button from '../button-component/button.component';
import starFill from '../../../Assets/img/star-fill.svg';
import { HiOutlineUser, HiOutlineUsers } from 'react-icons/hi';
// img ro import kon

const CardAI = (
  imgUrl,
  title,
  description,
  teacher,
  price,
  archive,
  date,
  starFill,
  showArchive,
  showPrice,
  showStar,
  children
) => {
  return (
    <div className="border-gray-500 text-gray-500 border-2 rounded-md p-3">
      <img src={img} className="rounded-md w-full" alt="" />
      <p className="text-right text-xs font-bold text-blue-600 mt-4 mb-2">
        {item.archive ? 'آرشیو شده' : 'آرشیو نشده'}
      </p>
      <div>
        <p className="text-right text-xl mb-3 text-gray-900">
          {title}
        </p>
        <p className="text-gray-500 text-sm mb-3 text-right">
          {description}
        </p>
        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <HiOutlineUser size="20px" className="ml-3" />
            <span>{teacher}</span>
          </div>
          {showStar && (
            <div className="flex">
              <img className="ml-3" src={starFill} alt="" />
              <span>{date}</span>
            </div>
          )}
        </div>
        {showPrice && (
          <div className="flex justify-between mb-3">
            <div className="flex items-center">
              <HiOutlineUsers size="20px" className="ml-3" />
              <span>50</span>
            </div>
            <span>{price} ریال</span>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default CardAI;

{
  /* <Button ButtonType="button" classButton="btn btn-base w-full">
جزئیات دوره
</Button> */
}
