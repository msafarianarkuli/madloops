import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../../common/button-component/button.component";
import GroupButton from "../../common/GroupButton/GroupButton";
import LandingTitle from "../../common/LandingTitle/LandingTitle";
import CardAI from "../../common/Card/Card";
import {
  handleLikeSorting,
  handleDateSortingDes,
} from "../../../Core/utils/sorting";
import { useNavigate } from "react-router-dom";
import { useGetCoursesQuery } from "../../../store/courses/coursesSlice";

const LandingCourse = () => {
  const { data, isLoading } = useGetCoursesQuery();
  const navigate = useNavigate();
  const [groupBtnList] = useState([
    { id: 1, title: "همه", type: "all" },
    { id: 2, title: "جدیدترین دوره ها", type: "new" },
    { id: 3, title: "محبوب ترین دوره ها", type: "like" },
  ]);
  const [filterCourses, setFilterCourses] = useState([]);

  useEffect(() => {
    handleSorting("all");
  }, [isLoading]);

  const handleSorting = (type) => {
    switch (type) {
      case "all":
        setFilterCourses(data?.result);
        break;
      case "new":
        setFilterCourses(handleDateSortingDes(data?.result, 5));
        break;
      case "like":
        setFilterCourses(handleLikeSorting(data?.result, 5));
        break;
    }
  };

  return (
    <>
      <section className="text-center relative dark:bg-dark-primary">
        <div className="container mx-auto">
          <div data-aos="fade-down">
            <LandingTitle title="دوره ها" className="pt-20 sm:pt-10 pb-5">
              دوره مورد نظر خود را کاوش کنید
            </LandingTitle>
          </div>
          <div data-aos="fade-up">
            <GroupButton items={groupBtnList} onSorting={handleSorting} />
          </div>
          <Swiper
            data-aos="slide-up"
            className="mt-10 h-[540px]"
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            centerInsufficientSlides={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
          >
            {filterCourses?.map((item) => (
              <SwiperSlide key={item._id}>
                {isLoading ? (
                  <div className="w-full">
                    <div className="h-full border-2 border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex justify-center items-center animate-pulse w-full h-48 bg-gray-400 rounded-t-lg dark:bg-gray-700">
                        <svg
                          className="w-12 h-12 text-gray-200"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 640 512"
                        >
                          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                        </svg>
                      </div>

                      <div className="p-6">
                        <h2 className="bg-gray-400 dark:bg-gray-700 animate-pulse h-4 w-1/4 mb-2 rounded-lg"></h2>
                        <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500 dark:bg-gray-700 rounded-lg"></h1>
                        <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400 dark:bg-gray-700 rounded-lg"></p>
                        <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400 dark:bg-gray-700 rounded-lg"></p>
                        <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400 dark:bg-gray-700 rounded-lg"></p>
                        <div className="flex items-center flex-wrap ">
                          <a className="bg-indigo-300 dark:bg-gray-700 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0 rounded-lg"></a>
                          <span className="bg-indigo-300 dark:bg-gray-700 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1 rounded-lg"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <CardAI item={item} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            classButton="btn btn-base dark:text-dark-secondary-title"
            onClick={() => navigate("/courses")}
          >
            بیشتر
          </Button>
        </div>
      </section>
    </>
  );
};

export default LandingCourse;
