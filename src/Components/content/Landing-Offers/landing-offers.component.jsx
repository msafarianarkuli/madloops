import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import LandingTitle from '../../common/LandingTitle/LandingTitle';
import OffersForm from '../../common/OffersForm/OffersForm';
import offers from '../../../Assets/friendly.png';

const LandingOffers = () => {
  const [groupBtnList] = useState([
    'همه',
    'جدیدترین دوره ها',
    'محبوب ترین دوره ها',
    'دوره های در حال پیش فروش',
  ]);
  return (
    <>
      <section>
        <LandingTitle
          title="پیشنهادات و انتقادات"
          className="mt-20 mb-16"
        >
          می توانید در باکس زیر پیشنهاد خود را وارد کنید
        </LandingTitle>
        <div className="bg-gray-300 grid grid-cols-1 md:grid-cols-2 pt-5">
          <div className="flex justify-center items-center">
            <OffersForm />
          </div>
          <div className="hidden md:block">
            <img className="w-96" src={offers} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingOffers;
