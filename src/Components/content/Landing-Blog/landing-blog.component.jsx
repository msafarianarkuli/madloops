import { FieldName } from "./../../common/field-name-component/field-name.component";
import { Button } from "./../../common/button-component/button.component";
import { BsFillCircleFill, BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import useSwiperRef from "./swiper-wrapper-button";
import Data from "../../../Core/services/Fake Service/Blogs";

SwiperCore.use([Autoplay, Navigation]);

const LandingBlog = () => {
  const { blogs } = Data;

  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  return (
    <div className="container m-auto relative">
      <div className="text-center mt-5">
        <FieldName
          showH2
          showP
          classH2Field="text-neutral-900 font-bold sm:text-3xl text-xl mr-4 "
          title="مقالات و خبر ها"
          classPfield="text-slate-400 sm:text-base text-xs mt-2"
          field="با خبر های ما بروز باشید"
        />
      </div>
      <Button classButton="hidden 2xl:absolute 2xl:top-56 2xl:left-1 xl:absolute xl:top-56 xl:left-0 lg:absolute lg:top-60 lg:left-0 z-10 xl:text-xl xl:p-3 md:text-base md:p-2 text-blue-600 outline rounded-xl hover:bg-blue-600 hover:text-white transition ease-in-out delay-150 lg:block sm:hidden">
        همه مطالب
      </Button>

      <Swiper
        className="external-slider sm:mt-6 rounded z-0 relative"
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
            <SwiperSlide>
              <div
                className="grid grid-cols-2 mt-10 lg:mt-48 bg-[#4784DA]"
                key={item.id}
              >
                <div className="xs:w-40 2xl:w-fit 2xl:absolute 2xl:top-10 2xl:right-18 xl:w-[26rem] 2xl:m-0 xl:m-0 xl:absolute xl:top-16 xl:right-24 lg:m-0 lg:w-[22rem] lg:absolute lg:top-28 lg:right-16 md:w-[14rem] md:mx-16 md:my-6 sm:w-[12rem] rounded-t-xl  bg-slate-400 z-100">
                  <img
                    src={item.image}
                    className="lg:p-2 w-full lg:rounded-t-xl scale-100 hover:scale-105 transition duration-500 hover:animate-pulse cursor-pointer"
                    alt=""
                  />
                </div>
                <div className="2xl:mt-20 xl:mt-12 md:mt-10 md:mr-6 sm:mt-4 sm:mr-0 mt-5 mr-5  text-white col-start-2 col-span-4">
                  <div className="flex lg:leading-6">
                    <img
                      src={require("../../../Assets/star-fill.svg").default}
                      className="lg:w-fit lg:p-1 sm:w-4 w-2 mb-[2px] mr-[2px]"
                      alt="star"
                    />
                    <h5 className="md:ml-5 lg:text-base sm:text-xs text-[8px] mx-1 ml-3">
                      برترین مقاله
                    </h5>
                    <span className="mb-1 lg:block hidden">|</span>
                    <BsFillCircleFill className="lg:hidden md:w-2 md:mt-[1px] w-[3px]" />
                    <div className="lg:mr-5 md:mr-2 mr-1 flex">
                      <p className="text-[8px] sm:text-xs pl-1 md:pl-2 lg:text-base ">
                        {item.readTime}
                      </p>
                      <h5 className="lg:text-base sm:text-xs text-[8px]">
                        دقیقه مطالعه
                      </h5>
                    </div>
                  </div>
                  <Button classButton="w-10/12 text-right font-bold 2xl:mt-8 xl:text-2xl xl:mt-6 lg:mt-4 md:mt-6 sm:mt-4 mt-2 sm:text-base text-xs">
                    {item.title}
                  </Button>
                  <div className="lg:flex 2xl:mt-8 xl:mt-6 lg:mt-4 md:mt-6 sm:mt-4 mt-2">
                    <h5 className="2xl:text-base xl:text-sm lg:text-xs sm:text-[12px] text-[10px]  bg-eye-fill lg:bg-[length:16px] bg-[length:10px] sm:bg-[length:12px] lg:leading-6 md:leading-5 bg-no-repeat bg-right pr-5 lg:ml-4">
                      {item.view} بازدید
                    </h5>
                    <span className="lg:block hidden">|</span>
                    <h5 className="2xl:text-base xl:text-sm lg:text-xs sm:text-[12px] text-[10px] bg-heart-fill lg:bg-[length:16px] bg-[length:10px] sm:bg-[length:12px] lg:leading-6 md:leading-5 bg-no-repeat bg-right pr-5 lg:mx-4">
                      {item.likeCount} لایک
                    </h5>
                    <span className="lg:block hidden">|</span>
                    <h5 className="2xl:text-base xl:text-sm lg:text-xs sm:text-[12px] text-[10px] bg-comment-fill lg:bg-[length:16px] bg-[length:10px] sm:bg-[length:12px] lg:leading-6 md:leading-5 bg-no-repeat bg-right pr-5 lg:mx-4">
                      {item.comment} نظر
                    </h5>
                  </div>
                  <p className="w-10/12 hidden 2xl:mt-8 xl:mt-6 lg:mt-4 text-right 2xl:text-base xl:text-sm lg:text-xs lg:block lg:leading-relaxed sm:hidden">
                    {item.description}
                  </p>
                  <Button classButton="text-[10px] xl:text-base 2xl:my-10 xl:my-8 lg:my-6 md:my-6 sm:text-sm sm:mt-4 mt-2">
                    بیشتر بخوانید...
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div
          className="my-button-next z-10 xl:w-fit md:w-14 sm:w-12 md:p-5 sm:p-3 absolute xl:top-[57%] lg:top-[61%] md:top-[48%] sm:top-[80%] md:left-1 sm:left-5 text-3xl rounded-full transition ease-in-out duration-500 bg-white cursor-pointer drop-shadow-lg scale-100 hover:scale-125"
          ref={nextElRef}
        >
          <BsArrowLeft className="w-full h-full text-[#929292]" />
        </div>
        <div
          className="my-button-prev z-10 xl:w-fit md:w-14 sm:w-12 md:p-5 sm:p-3 absolute xl:top-[57%] lg:top-[61%] md:top-[48%] md:right-1 sm:top-[80%] sm:right-[80%] text-3xl rounded-full transition ease-in-out duration-500 bg-white cursor-pointer drop-shadow-lg scale-100 hover:scale-125"
          ref={prevElRef}
        >
          <BsArrowRight className="w-full h-full text-[#929292]" />
        </div>
      </Swiper>

      <Button classButton="text-[10px] p-1 sm:mx-auto sm:mt-10 sm:p-1 md:text-base md:p-2 text-blue-600 sm:outline rounded-xl hover:bg-blue-600 hover:text-white transition ease-in-out delay-150 lg:hidden sm:block">
        همه مطالب
      </Button>
    </div>
  );
};

export default LandingBlog;
