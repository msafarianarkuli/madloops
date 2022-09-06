import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../../common/button-component/button.component';
import Card from '../../common/Card/Card';
import GroupButton from '../../common/GroupButton/GroupButton';
import LandingTitle from '../../common/LandingTitle/LandingTitle';
import Data from '../../../Core/services/Fake Service/Cources';

const LandingCource = () => {
  const { courses } = Data;
  const [groupBtnList] = useState([
    'همه',
    'جدیدترین دوره ها',
    'محبوب ترین دوره ها',
    'دوره های در حال پیش فروش',
  ]);
  return (
    <>
      <section className="text-center relative">
        <LandingTitle title="دوره ها" className="mt-20 mb-5">
          دوره مورد نظر خود را کاوش کنید
        </LandingTitle>
        <GroupButton items={groupBtnList} />
        <Swiper
          className="my-10"
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
              spaceBetween: 10,
            },
          }}
          centerInsufficientSlides={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
        >
          {courses.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button classButton="btn btn-base">بیشتر</Button>
      </section>
    </>
  );
};

export default LandingCource;
