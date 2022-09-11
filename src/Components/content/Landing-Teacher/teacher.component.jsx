import Data from "../../../Core/services/Fake Service/Teacher";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { BsPlayFill } from "react-icons/bs";
import { FieldName } from "./../../common/field-name-component/field-name.component";
import { Button } from "./../../common/button-component/button.component";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./teacher.styles.scss";
import useSwiperRef from "./../Landing-Blog/swiper-wrapper-button";

SwiperCore.use([Autoplay, Navigation]);

const LandingTeacher = () => {
  const { teachers } = Data;
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  return (
    <section>
      <div className="container m-auto">
        <div className="text-center mt-5">
          <FieldName
            showH2
            showP
            classH2Field="text-neutral-900 font-bold sm:text-3xl text-xl mr-4"
            title="اساتید برتر"
            classPfield="text-slate-400 sm:text-base text-xs mt-2"
            field="با اساتید برتر آشنا شوید."
          />
        </div>
        <Swiper
          className="swiper-v mt-20"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          initialSlide={2}
          freeMode={true}
          slidesPerView={5}
          roundLengths={true}
          spaceBetween={0}
          navigation={{
            nextEl,
            prevEl,
          }}
          breakpoints={{
            0: {
              slidesPerView: 5,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 80,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          centerInsufficientSlides={true}
          centeredSlides={true}
        >
          {teachers.map((item, index) => (
            <SwiperSlide className="flex" key={item.id}>
              {({ isActive, isPrev, isNext }) =>
                isActive ? (
                  <div className="grid lg:grid-cols-2 w-full animate-card rounded-3xl bg-[#F4F5F9]">
                    <div className="sm:mr-8 p-3 sm:ml-8 lg:ml-0">
                      <div className="flex sm:justify-between justify-center">
                        <h2 className="text-xl my-5 sm:block lg:hidden hidden">
                          {item.teacher}
                        </h2>
                        <div className="md:mr-14 lg:hidden sm:block cursor-pointer">
                          <img
                            src={require("../../../Assets/mohsen.jpg")}
                            className="rounded-full  sm:block lg:hidden sm:w-16 w-24 mt-5"
                          />
                        </div>
                      </div>

                      <h2 className="sm:text-xl text-base xl my-5 ml-2 lg:block sm:hidden">
                        {item.teacher}
                      </h2>

                      <h4 className="sm:text-base text-sm text-[#615C67]">
                        {item.title}
                      </h4>
                      <p className="sm:text-sm text-xs mt-2 text-[#4A4453]">
                        {item.description}
                      </p>
                      <Button classButton="text-white bg-[#5DC8B2] w-20 rounded-xl p-2 my-5 hover:scale-125 transition-transform ease-in duration-300 ">
                        بیشتر
                      </Button>
                    </div>

                    <div className="relative lg:block sm:hidden lg:mb-7 z-0">
                      <img
                        src={require("../../../Assets/mohsen.jpg")}
                        className=" cursor-pointer rounded-full xl:w-52 lg:w-44 sm:w-16 2xl:mx-36 xl:mx-28 lg:mx-16 mt-10 z-10 lg:block hidden"
                      />
                      <div className="lg:block hidden">
                        <img
                          src={require("../../../Assets/Ellipse 3.svg").default}
                          className="xl:w-28 lg:w-24 2xl:absolute 2xl:top-36 2xl:right-32 xl:absolute xl:top-36 xl:right-24 lg:absolute lg:top-32 lg:right-12 -z-10"
                          alt=""
                        />
                        <img
                          src={require("../../../Assets/Ellipse 4.svg").default}
                          className="xl:w-16 lg:w-14 2xl:absolute 2xl:top-4 2xl:right-44 xl:absolute xl:top-4 xl:right-36 lg:absolute lg:top-4 lg:right-24 -z-10"
                          alt=""
                        />
                        <img
                          src={require("../../../Assets/Ellipse 5.svg").default}
                          className="xl:w-24 lg:w-20 2xl:absolute 2xl:top-32 2xl:right-72 xl:absolute xl:top-32 xl:right-64 lg:absolute lg:top-32 lg:right-44 -z-10"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={
                      isActive
                        ? "m-auto inline-block rounded-full p-5 bg-gray-200 cursor-pointer hover:bg-slate-400 transition  ease-in delay-200 hover:transition hover:ease-out hover:delay-200"
                        : isPrev || isNext
                        ? "m-auto inline-block rounded-full w-32 p-3 opacity-75 bg-gray-200"
                        : "m-auto inline-block rounded-full w-16 p-2 opacity-50 bg-gray-200"
                    }
                  >
                    <img
                      src={require("../../../Assets/mohsen.jpg")}
                      className={
                        isActive
                          ? "rounded-full w-56"
                          : isPrev || isNext
                          ? "rounded-full w-36"
                          : "rounded-full w-28"
                      }
                      alt=""
                    />
                  </div>
                )
              }
            </SwiperSlide>
          ))}
          <div className="flex justify-center mt-10">
            <div
              className="w-14 h-14 p-1 bg-[#E3E3E3] cursor-pointer rounded-full transition ease-in-out duration-500 hover:bg-[#C6ECE4] group"
              ref={prevElRef}
            >
              <div className="bg-[#F4F5F9] w-12 h-12 rounded-full shadow-md transition ease-in-out duration-500 group-hover:bg-[#5DC8B2] group">
                <BsPlayFill className="w-full h-full -mx-[3px] rounded-sm text-9xl transition ease-in-out duration-500 text-[#707070] group-hover:text-white" />
              </div>
            </div>
            <div
              className="rotate-180 mr-5 w-14 h-14 p-1 bg-[#E3E3E3] cursor-pointer rounded-full transition ease-in-out duration-500 hover:bg-[#C6ECE4] group"
              ref={nextElRef}
            >
              <div className="bg-[#F4F5F9] w-12 h-12 rounded-full shadow-md transition ease-in-out duration-500 group-hover:bg-[#5DC8B2] group">
                <BsPlayFill className="w-full h-full -mx-[3px] rounded-sm text-9xl transition ease-in-out duration-500 text-[#707070] group-hover:text-white" />
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default LandingTeacher;

/* <div className="swiper-button-prev w-full">
<IoMdArrowDropright className="swiper-icon-right" />
</div>
<div className="swiper-button-next w-full">
<IoMdArrowDropleft className="swiper-icon-left" />
</div>
       className={
                      isActive
                        ? "m-auto inline-block rounded-full p-5 bg-gray-200 cursor-pointer hover:bg-slate-400 transition  ease-in delay-200 hover:transition hover:ease-out hover:delay-200"
                        : isPrev || isNext
                        ? "m-auto inline-block rounded-full p-5 opacity-75 bg-gray-200"
                        : "m-auto inline-block rounded-full p-5 opacity-50 bg-gray-200"
                    }
                  >
                    <img
                      src={require("../../../Assets/mohsen.jpg")}
                      className={
                        isActive
                          ? "rounded-full w-56"
                          : isPrev || isNext
                          ? "rounded-full w-36"
                          : "rounded-full w-28"
                      }
                      alt=""
                    />
                  </div>

*/
