import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../../common/button-component/button.component';
import GroupButton from '../../common/GroupButton/GroupButton';
import LandingTitle from '../../common/LandingTitle/LandingTitle';
import Data from '../../../Core/services/Fake Service/Cources';
import CardAI from './../../common/Card/Card';
import {
  handleLikeSorting,
  handleDateSorting,
} from '../../../Core/utils/sorting';
const LandingCource = () => {
  const { courses } = Data;
  const [groupBtnList] = useState([
    { id: 1, title: 'همه', type: 'all' },
    { id: 2, title: 'جدیدترین دوره ها', type: 'new' },
    { id: 3, title: 'محبوب ترین دوره ها', type: 'like' },
  ]);
  const [filterCourses, setFilterCourses] = useState(courses);

  const handleSorting = (type) => {
    switch (type) {
      case 'all':
        setFilterCourses(courses);
        break;
      case 'view':
        console.log('view');
        break;
      case 'new':
        setFilterCourses(handleDateSorting(courses, 5));
        break;
      case 'like':
        setFilterCourses(handleLikeSorting(courses, 5));
        break;
    }
  };

  return (
    <>
      <section className="text-center relative">
        <LandingTitle title="دوره ها" className="mt-20 mb-5">
          دوره مورد نظر خود را کاوش کنید
        </LandingTitle>
        <GroupButton items={groupBtnList} onSorting={handleSorting} />
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
          {filterCourses.map((item, index) => (
            <SwiperSlide key={item.id}>
              <CardAI item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button classButton="btn btn-base">بیشتر</Button>
      </section>
    </>
  );
};

export default LandingCource;
