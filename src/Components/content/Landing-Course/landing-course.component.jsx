import React, { useState, useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../../common/button-component/button.component";
import GroupButton from "../../common/GroupButton/GroupButton";
import LandingTitle from "../../common/LandingTitle/LandingTitle";
import CardAI from "../../common/Card/Card";
import { ProductsContext } from "./../../../Core/context/products.context";
import {
  handleLikeSorting,
  handleDateSortingDes,
} from "../../../Core/utils/sorting";
import { useNavigate } from "react-router-dom";

const LandingCourse = () => {
  const { products } = useContext(ProductsContext);
  const navigate = useNavigate();
  const [groupBtnList] = useState([
    { id: 1, title: "همه", type: "all" },
    { id: 2, title: "جدیدترین دوره ها", type: "new" },
    { id: 3, title: "محبوب ترین دوره ها", type: "like" },
  ]);
  const [filterCourses, setFilterCourses] = useState(products);

  const handleSorting = (type) => {
    switch (type) {
      case "all":
        setFilterCourses(products);
        break;
      case "new":
        setFilterCourses(handleDateSortingDes(products, 5));
        break;
      case "like":
        setFilterCourses(handleLikeSorting(products, 5));
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
            className="my-10 h-[540px]"
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
            {filterCourses.map((item) => (
              <SwiperSlide key={item.id}>
                <CardAI item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Button
            data-aos="zoom-in-down"
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
