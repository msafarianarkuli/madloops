import React from 'react';
import profile from '../../../Assets/profile.png';
import like from '../../../Assets/likee.png';
import likeFill from '../../../Assets/likesolid.png';
import disLike from '../../../Assets/dislikee.png';
const Comment2 = () => {
  return (
    <>
      <div className="border-2 border-[#7F56DA] rounded-xl mb-3">
        <div className="flex justify-between p-5">
          <div className="flex">
            <img
              src={profile}
              alt=""
              className="w-14 h-14 rounded-full ml-3"
            />
            <div className="flex flex-col">
              <p className="text-2xl mb-1">میکائیل محسنی</p>
              <div className="flex">
                <p className="text-sm text-gray-400 ml-4">
                  16 خرداد 1401
                </p>
                <p className="text-sm text-gray-400">14:53</p>
              </div>
            </div>
          </div>
          <div className="flex items-center text-gray-400 text-lg">
            <span className="mx-2 mb-2">4</span>
            <img src={like} className="w-8 h-8 mb-5" />{' '}
            <span className="mx-2 mb-2">12</span>
            <img src={disLike} className="w-8 h-8" />{' '}
          </div>
        </div>
        <div>
          <p className="text-xl text-gray-400 mt-2 mb-3 mr-8">
            پروژه محور و کاربردی آموزش داده میشه تا شما عزیزان مطابق
            با نیاز بازار کار، نمونه کار حرفه ای داشته باشید. (حالا
            باید فهمیده باشید چرا اسم دوره رو گذاشتم هیولای
            جاوااسکریپت)
          </p>
        </div>
      </div>
    </>
  );
};

export default Comment2;
