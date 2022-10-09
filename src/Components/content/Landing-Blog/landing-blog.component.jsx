import { FieldName } from './../../common/field-name-component/field-name.component';
import { Button } from './../../common/button-component/button.component';
import {
  BsFillCircleFill,
  BsArrowRight,
  BsArrowLeft,
} from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import useSwiperRef from './swiper-wrapper-button';
import Data from '../../../Core/services/Fake Service/Blogs';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

SwiperCore.use([Autoplay, Navigation]);

const LandingBlog = () => {
  const [blogs, setBlogs] = useState(Data);

  const handleLead = (value) => {
    const trimmedLead =
      value
        .substring(0, 200)
        .substring(0, value.substring(0, 200).lastIndexOf(' ')) +
      '...';
    return trimmedLead;
  };

  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();
  const navigate = useNavigate();
  return (
    <section className="dark:bg-dark-primary pb-28">
      <div className="container m-auto relative ">
        <div className="text-center pt-16">
          <FieldName
            showH2
            showP
            classH2Field="text-neutral-900 font-bold sm:text-3xl text-xl mr-4 dark:text-dark-secondary-title"
            title="مقالات و خبر ها"
            classPfield="text-slate-400 sm:text-base text-xs mt-2 dark:text-dark-text"
            field="با خبر های ما بروز باشید"
          />
        </div>
        <Link to="blogs">
          <Button classButton="hidden xl:absolute xl:top-[105px] xl:left-10 lg:absolute lg:top-[118px] lg:left-10 z-10 xl:text-xl xl:p-3 md:text-base md:p-2 text-[#5DC8B2] outline rounded-lg dark:bg-dark-primary dark:text-gray-500 dark:hover:hover:text-[#5DC8B2] hover:bg-[#5DC8B2] hover:text-white duration-150 lg:block sm:hidden">
            مطالب بیشتر
          </Button>
        </Link>
        <Swiper
          className="external-slider rounded z-0 relative"
          navigation={{
            prevEl,
            nextEl,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {blogs.map((item) => {
            return (
              <SwiperSlide key={item.id} className="px-10">
                <div className="grid grid-cols-5 mt-1 rounded-lg sm:mt-10 lg:mt-24 dark:bg-dark-secondary bg-[#5DC8B2]">
                  <div className="w-28 2xl:w-[22rem] xl:w-[18rem] xl:absolute xl:top-0 xl:right-36 lg:w-[14rem] lg:absolute lg:top-0 lg:right-28 lg:m-0 md:w-[10rem] md:mx-16 md:my-6 sm:w-[12rem] rounded-lg dark:bg-dark-primary bg-white z-100">
                    <img
                      src={item.image}
                      className="lg:p-2 xl:w-[600px] w-full md:h-[204px] h-[146px] sm:h-[222px] xl:h-[340px] lg:h-[320px] lg:rounded-2xl rounded-r-lg md:rounded-lg"
                      alt=""
                    />
                  </div>
                  <div className="md:mt-6 md:mr-6 sm:mt-4 sm:mr-0 mt-2 mr-5 text-white col-start-3 col-span-4">
                    <div className="flex lg:leading-6">
                      <img
                        src={
                          require('../../../Assets/star-fill.svg')
                            .default
                        }
                        className="lg:w-fit lg:p-1 sm:w-4 w-2 mb-[2px] mr-[2px]"
                        alt="star"
                      />
                      <h5 className="md:ml-5 text-gray-200 lg:text-base sm:text-xs text-[8px] mx-1 ml-3">
                        برترین مقاله
                      </h5>
                      <span className="mb-1 lg:block hidden">|</span>
                      <BsFillCircleFill className="lg:hidden md:w-2 md:mt-[1px] w-[3px] pb-1" />
                      <div className="lg:mr-5 md:mr-2 mr-1 flex">
                        <p className="text-[8px] sm:text-xs pl-1 md:pl-2 lg:text-base ">
                          {item.readTime}
                        </p>
                        <h5 className="lg:text-base text-gray-200 sm:text-xs text-[8px]">
                          دقیقه مطالعه
                        </h5>
                      </div>
                    </div>
                    <p className="w-10/12 sm:h-[50px] h-[40px] text-right font-bold text-[9px] xl:text-2xl sm:mt-4 mt-1 sm:text-base">
                      {handleLead(item.title)}
                    </p>
                    <div className="lg:flex xl:mt-8 lg:mt-4 sm:mt-4 mt-4">
                      <h5 className="2xl:text-base dark:text-gray-300 xl:text-sm lg:text-xs sm:text-[12px] text-[8px]  bg-eye-fill lg:bg-[length:16px] bg-[length:10px] sm:bg-[length:12px] lg:leading-6 md:leading-5 bg-no-repeat bg-right pr-5 lg:ml-4">
                        {item.view} بازدید
                      </h5>
                      <span className="lg:block hidden">|</span>
                      <h5 className="2xl:text-base dark:text-gray-300 xl:text-sm lg:text-xs sm:text-[12px] text-[8px] bg-heart-fill lg:bg-[length:16px] bg-[length:10px] sm:bg-[length:12px] lg:leading-6 md:leading-5 bg-no-repeat bg-right pr-5 lg:mx-4">
                        {item.likeCount} لایک
                      </h5>
                      <span className="lg:block hidden">|</span>
                      <h5 className="2xl:text-base dark:text-gray-300 xl:text-sm lg:text-xs sm:text-[12px] text-[8px] bg-comment-fill lg:bg-[length:16px] bg-[length:10px] sm:bg-[length:12px] lg:leading-6 md:leading-5 bg-no-repeat bg-right pr-5 lg:mx-4">
                        {item.comment} نظر
                      </h5>
                    </div>
                    <p className="w-10/12 hidden dark:text-gray-300 lg:mt-4 text-right 2xl:text-base xl:text-sm lg:text-xs lg:block lg:leading-relaxed sm:hidden">
                      {handleLead(item.description)}
                    </p>
                    <Button
                      classButton="text-[10px] xl:text-base xl:my-8 md:my-6 sm:text-sm sm:my-4 mt-2 animate-[onHoverGoogle_1s_ease-in-out_infinite]"
                      onClick={() => navigate(`blogs/${item.id}`)}
                    >
                      بیشتر بخوانید ...
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div
            className="my-button-next z-10 xl:w-fit md:w-14 sm:w-12 md:p-5 sm:p-3 absolute xl:top-[52%] xl:left-1 lg:top-[55%] md:top-[48%] md:left-3 sm:top-[79%] sm:left-12 text-3xl rounded-lg md:rounded-full duration-300 bg-white dark:bg-dark-primary cursor-pointer drop-shadow-lg scale-100 hover:scale-110 hover:translate-x-2"
            ref={nextElRef}
          >
            <BsArrowLeft className="w-full h-full text-[#929292]" />
          </div>
          <div
            className="my-button-prev z-10 xl:w-fit md:w-14 sm:w-12 md:p-5 sm:p-3 absolute xl:top-[52%] xl::right-1 lg:top-[55%] md:top-[48%] md:right-3 sm:top-[79%] sm:right-[75%] text-3xl rounded-lg md:rounded-full duration-300 bg-white dark:bg-dark-primary cursor-pointer drop-shadow-lg scale-100 hover:scale-110 hover:-translate-x-2"
            ref={prevElRef}
          >
            <BsArrowRight className="w-full h-full text-[#929292]" />
          </div>
        </Swiper>
        <Link to="blogs">
          <Button classButton="mx-10 mt-3 text-[16px] sm:text-[20px] p-1 sm:mx-auto sm:mt-10 sm:p-1 md:text-base md:p-2 text-[#5DC8B2] sm:outline hover:bg-[#5DC8B2] rounded-md md:rounded-lg hover:text-white duration-150 lg:hidden sm:block">
            مطالب بیشتر
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LandingBlog;
