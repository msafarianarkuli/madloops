import React from 'react';
import singleCourseImg from '../../Assets/singleCourse.jpg';
import CourseDetails from '../../Components/content/SingleCourse/CourseDetails';
import CourseOpacity from '../../Components/content/SingleCourse/CourseOpacity';
import CourseTeacher from '../../Components/content/SingleCourse/CourseTeacher';
import CoursePrice from '../../Components/content/SingleCourse/CoursePrice';
import CoursePrerequisite from '../../Components/content/SingleCourse/CoursePrerequisite';
import CourseProperTo from '../../Components/content/SingleCourse/CourseProperTo';
import CourceImproperTo from '../../Components/content/SingleCourse/CourceImproperTo';
import CustomTab from '../../Components/common/tabs/CustomTab';

const details = [];
const SingleCourse = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 p-2 lg:p-6">
      <div className="xl:col-span-9 bg-[#F9F9FF] custom-shadow">
        <div className="rounded-lg overflow-hidden ">
          <img src={singleCourseImg} />
          <div className="px-4 lg:px-16">
            <h1 className="text-2xl lg:text-4xl font-bold text-center my-5 lg:my-10">
              دوره انگولار
            </h1>
            <p className="text-lg lg:text-2xl text-gray-400 leading-10">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
              بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
              برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
              هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
              متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
              برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
              پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
              داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
              سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
              طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
              از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
              تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشد، کتابهای زیاداساسا مورد استفاده
              قرار گیرد.
            </p>
          </div>
          <CustomTab />
        </div>
      </div>
      <div className="xl:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-1">
          <CourseDetails />
          <CourseOpacity />
          <CourseTeacher />
          <CoursePrice />
          <CoursePrerequisite />
          <CourseProperTo />
          <CourceImproperTo />
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
