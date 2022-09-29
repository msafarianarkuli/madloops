import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "../../Components/content/SingleCourse/CourseDetails";
import CourseOpacity from "../../Components/content/SingleCourse/CourseOpacity";
import CourseTeacher from "../../Components/content/SingleCourse/CourseTeacher";
import CoursePrice from "../../Components/content/SingleCourse/CoursePrice";
import CoursePrerequisite from "../../Components/content/SingleCourse/CoursePrerequisite";
import CourseProperTo from "../../Components/content/SingleCourse/CourseProperTo";
import CourceImproperTo from "../../Components/content/SingleCourse/CourceImproperTo";
import CustomTab from "../../Components/common/tabs/CustomTab";

import singleCourseImg from "../../Assets/singleCourse.jpg";

import faqData from "../../Core/services/Fake Service/faqs";
import commentData from "../../Core/services/Fake Service/CourseComments";
import tabData from "../../Core/services/Fake Service/CourseTabList";
import { getCourse } from "../../Core/services/Fake Service/CoursesPage";

const SingleCourse = () => {
  const [faqList, setFaqList] = useState(faqData);
  const { id } = useParams();
  const [item] = useState(getCourse(Number(id)));

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 p-2 lg:p-6 container mx-auto">
      <div className="xl:col-span-9 bg-[#F9F9FF] custom-shadow">
        <div className="rounded-lg overflow-hidden ">
          <img src={item.image} />
          <div className="px-4 lg:px-16">
            <h1 className="text-2xl lg:text-4xl font-bold text-center my-5 lg:my-10">
              {item.title}
            </h1>
            <p className="text-lg lg:text-2xl text-gray-400 leading-10">
              {item.description}
            </p>
          </div>
          <CustomTab
            faqList={faqList}
            setFaqList={setFaqList}
            commentData={commentData}
            tabData={tabData}
          />
        </div>
      </div>
      <div className="xl:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-1">
          <CourseDetails />
          <CourseOpacity />
          <CourseTeacher />
          <CoursePrice item={item} />
          <CoursePrerequisite />
          <CourseProperTo />
          <CourceImproperTo />
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
