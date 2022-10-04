import React, { useState, useRef } from 'react';
import user from '../../../Assets/user.png';
import likeFillIcon from '../../../Assets/likee.png';
import likeIcon from '../../../Assets/likesolid.png';
import disLikeFillIcon from '../../../Assets/dislikee.png';
import disLikeIcon from '../../../Assets/dislikesolid.png';
const Reply = ({ info, onDisLike, onLike }) => {
  const {
    id,
    refId,
    userName,
    date,
    time,
    body,
    liked,
    disLiked,
    likeCount,
    disLikeCount,
  } = info;

  return (
    <>
      <div
        className="2xl:w-[830px] lg:w-[700px] md:w-[580px] sm:w-[450px] w-[200px] mx-auto rounded-lg p-3 my-3"
        dir="rtl"
      >
        <div className="flex justify-between">
          <div className="flex">
            <img
              src={user}
              alt=""
              className="w-8 h-8 sm:w-14 sm:h-14 rounded-full ml-3"
            />
            <div className="flex flex-col">
              <p className="text-lg sm:text-xl lg:text-2xl mb-1">
                {userName}
              </p>
              <div className="flex">
                <p className="text-xs sm:text-sm text-gray-400 ml-4">
                  {date}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  {time}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center text-gray-400 text-lg">
            <span className="px-3 w-8 mb-1">
              {likeCount === 0 ? ' ' : likeCount}
            </span>
            <img
              src={liked ? likeFillIcon : likeIcon}
              className="w-4 h-4 sm:w-5 sm:h-5 mb-3 cursor-pointer"
              onClick={() => onLike(id)}
            />
            <span className="px-3 w-8 mb-1">
              {disLikeCount === 0 ? ' ' : disLikeCount}
            </span>
            <img
              src={disLiked ? disLikeFillIcon : disLikeIcon}
              className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
              onClick={() => onDisLike(id)}
            />
          </div>
        </div>
        <p className="text-lg lg:text-xl text-gray-400 mt-2 mb-3 mr-8 break-all">
          {body}
        </p>
      </div>
    </>
  );
};

export default Reply;
