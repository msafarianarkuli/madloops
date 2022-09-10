import React from 'react';
import { FaUsers, FaUserGraduate } from 'react-icons/fa';
const CourseOpacity = () => {
  return (
    <div className="course-Detail-container">
      <div className="course-detail-title-box">
        <p className="course-detail-title">ظرفیت</p>
      </div>
      <div className="flex justify-between text-gray-400 text-lg py-2 px-5 bg-zinc-200">
        <div className="flex items-center">
          <FaUsers />
          <p className="mr-3">ظرفیت کل دوره</p>
        </div>
        <div className="text-zinc-500">
          <p>100</p>
        </div>
      </div>
      <div className="flex justify-between text-gray-400 bg-zinc-50 text-lg py-2 px-5">
        <div className="flex items-center">
          <FaUserGraduate />
          <p className="mr-3">تعداد دانشجویان دوره:</p>
        </div>
        <div className="text-zinc-500">
          <p>65</p>
        </div>
      </div>
    </div>
  );
};

export default CourseOpacity;
