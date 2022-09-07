import React from 'react';
import check from '../../../Assets/check.png';
const CourseProperTo = () => {
  return (
    <div className="course-Detail-container">
      <div className="course-detail-title-box">
        <p className="course-detail-title">
          این دوره برای چه کسی مناسبه
        </p>
      </div>
      <div className="flex items-center text-gray-400 text-lg py-2 px-5 bg-zinc-200">
        <img src={check} alt="" className="w-5 h-5 ml-3" />
        <p>میتونی سایت های عالی پیاده سازی کنی</p>
      </div>
      <div className="flex items-center text-gray-400 bg-zinc-50 text-lg py-2 px-5">
        <img src={check} alt="" className="w-5 h-5 ml-3" />
        <p>از پشتیبانی قدرتمند گوگل برخوردار میشی</p>
      </div>
    </div>
  );
};

export default CourseProperTo;
