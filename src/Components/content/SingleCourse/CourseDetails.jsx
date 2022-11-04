import React from "react";
import {
  FaAndroid,
  FaGraduationCap,
  FaCalendarCheck,
  FaHourglassStart,
  FaHourglassEnd,
} from "react-icons/fa";

const CourseDetails = ({ item }) => {
  return (
    <div className="course-Detail-container" data-aos="fade-down">
      <div className="course-detail-title-box">
        <p className="course-detail-title">مشخصات دوره</p>
      </div>
      <div className="course-detail-item-odd">
        <div className="flex items-center">
          <FaGraduationCap />
          <p className="mr-3">نام دوره:</p>
        </div>
        <div className="text-zinc-500 dark:text-dark-text">
          <p>{item?.title}</p>
        </div>
      </div>
      <div className="course-detail-item-even">
        <div className="flex items-center">
          <FaCalendarCheck />
          <p className="mr-3">ترم ارائه شده:</p>
        </div>
        <div className="text-zinc-500 dark:text-dark-text">
          <p>تابستان</p>
        </div>
      </div>
      <div className="course-detail-item-odd">
        <div className="flex items-center">
          <FaHourglassStart />
          <p className="mr-3">شروع ترم:</p>
        </div>
        <div className="text-zinc-500 dark:text-dark-text">
          <p>{item?.startDate.slice(0, 10)}</p>
        </div>
      </div>
      <div className="course-detail-item-even">
        <div className="flex items-center">
          <FaHourglassEnd />
          <p className="mr-3">پایان ترم:</p>
        </div>
        <div className="text-zinc-500 dark:text-dark-text">
          <p>{item?.endDate.slice(0, 10)}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CourseDetails;
