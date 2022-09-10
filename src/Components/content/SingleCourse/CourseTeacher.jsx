import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import bahr from '../../../Assets/bahr.jpg';
const CourseTeacher = () => {
  return (
    <div className="course-Detail-container">
      <div className="course-detail-title-box">
        <p className="course-detail-title">مدرس</p>
      </div>
      <div className="flex text-gray-400 text-lg bg-zinc-200">
        <img src={bahr} alt="" className="w-40" />
        <div className="p-4">
          <h3 className="text-xl">استاد بحرالعلوم</h3>
          <p className="text-base">
            آموزش پروژه محور انگولار اولین دوره از سری دوره های هیولا
            شو و پروژه محور در وب سایت **** است
          </p>
          <div className="flex justify-end">
            <FaWhatsapp className="mr-2" />
            <FaLinkedin className="mr-2" />
            <FaInstagram className="mr-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTeacher;