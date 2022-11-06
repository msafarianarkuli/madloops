import React from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "../../Components/content/SingleCourse/CourseDetails";
import CourseOpacity from "../../Components/content/SingleCourse/CourseOpacity";
import CourseTeacher from "../../Components/content/SingleCourse/CourseTeacher";
import CoursePrice from "../../Components/content/SingleCourse/CoursePrice";
import CoursePrerequisite from "../../Components/content/SingleCourse/CoursePrerequisite";
import CourseProperTo from "../../Components/content/SingleCourse/CourseProperTo";
import CourceImproperTo from "../../Components/content/SingleCourse/CourceImproperTo";
import CoursesTab from "../../Components/common/tabs/CoursesTab";
import { useGetCoursesQuery } from "../../store/courses/coursesSlice";

const SingleCourse = () => {
  const { id } = useParams();
  const { course } = useGetCoursesQuery("getCourses", {
    selectFromResult: ({ data }) => ({
      course: data?.find((item) => item._id === id),
    }),
  });

  return (
    <div className="dark:bg-dark-primary">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 p-2 lg:p-6 container mx-auto h-fit">
        <div
          className="xl:col-span-9 bg-[#F9F9FF] custom-shadow dark:shadow-none  rounded-lg dark:bg-dark-secondary"
          data-aos="fade-up"
        >
          <div className="rounded-lg overflow-hidden">
            <img src={course?.lesson.image} className="w-full h-500" />
            <div className="px-4 lg:px-16">
              <h1 className="text-2xl lg:text-4xl font-bold text-center my-5 lg:my-10 dark:text-dark-primary-title">
                {course?.lesson.lessonName}
              </h1>
              <p className="text-lg lg:text-2xl text-gray-400 leading-10 dark:text-dark-text">
                {course?.lesson.description}
              </p>
            </div>
            <CoursesTab />
          </div>
        </div>
        <div className="xl:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-1">
            <CourseDetails item={course} />
            <CourseOpacity item={course} />
            <CourseTeacher item={course} />
            <CoursePrice item={course} />
            <CoursePrerequisite />
            <CourseProperTo />
            <CourceImproperTo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
