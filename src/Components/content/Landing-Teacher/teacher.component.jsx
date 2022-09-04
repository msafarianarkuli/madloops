import { useState } from "react";
import Data from "../../../Core/services/Fake Service/Teacher";
import { BsFillCircleFill } from "react-icons/bs";
import { FieldName } from "./../../common/field-name-component/field-name.component";
import { Button } from "./../../common/button-component/button.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./teacher.styles.scss";

const LandingTeacher = () => {
  const { teachers } = Data;
  // SwiperCore.use([Autoplay, Navigation]);
  const [showCard, setShowCard] = useState(false);
  const widthJsx = () => {
    const cardWidth = document.querySelector(".swiper-slide-active");
    if (cardWidth.classList.contains("swiper-slide-active")) {
      return <h1>salam</h1>;
    } else {
      return null;
    }
  };

  return (
    <section>
      <div className="container m-auto">
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
        <Swiper
          className="mySwiper swiper-v my-10"
          spaceBetween={20}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            // 640: {
            //   slidesPerView: 2,
            //   spaceBetween: 10,
            // },
            // 768: {
            //   slidesPerView: 2,
            //   spaceBetween: 15,
            // },
            // 1024: {
            //   slidesPerView: 4,
            //   spaceBetween: 10,
            // },
          }}
          centerInsufficientSlides={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          containerModifierClass="swiper-v w-11/12"
          slidesPerView={5}
        >
          {teachers.map((item, index) => (
            <SwiperSlide className="m-auto flex" key={item.id}>
              {({ isActive, isPrev, isNext }) => (
                <>
                  {!showCard && isActive ? (
                    <div
                      className={
                        isActive
                          ? "m-auto inline-block rounded-full p-5 bg-gray-200 cursor-pointer hover:bg-slate-400  ease-in delay-200 hover:transition hover:ease-out hover:delay-200"
                          : isPrev || isNext
                          ? "m-auto inline-block rounded-full p-5 opacity-75 bg-gray-200"
                          : "m-auto inline-block rounded-full p-5 opacity-50 bg-gray-200"
                      }
                      onClick={() => setShowCard(!showCard)}
                    >
                      <img
                        src={require("../../../Assets/bahr.jpg")}
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
                  ) : (
                    <div
                      className={
                        isActive
                          ? "hidden m-auto rounded-full p-5 bg-gray-200 cursor-pointer hover:bg-slate-400  ease-in delay-200 hover:transition hover:ease-out hover:delay-200"
                          : isPrev || isNext
                          ? "m-auto inline-block rounded-full p-5 opacity-75 bg-gray-200"
                          : "m-auto inline-block rounded-full p-5 opacity-50 bg-gray-200"
                      }
                    >
                      <img
                        src={require("../../../Assets/bahr.jpg")}
                        className={
                          isActive
                            ? "rounded-full w-56 hidden"
                            : isPrev || isNext
                            ? "rounded-full w-36"
                            : "rounded-full w-28"
                        }
                        alt=""
                      />
                    </div>
                  )}

                  {showCard && isActive ? (
                    <div
                      className={
                        showCard &&
                        "grid lg:grid-cols-2 w-full m-auto rounded-3xl bg-[#F4F5F9]"
                      }
                    >
                      <div className="sm:mr-8 p-3 sm:ml-8 lg:ml-0">
                        <div className="flex justify-center">
                          <h2 className="text-xl my-5 sm:block lg:hidden hidden">
                            {item.teacher}
                          </h2>
                          <div
                            className="md:mt-5 md:mr-14 sm:mt-5 lg:hidden sm:block cursor-pointer"
                            onClick={() => setShowCard(!showCard)}
                          >
                            <img
                              src={require("../../../Assets/bahr.jpg")}
                              className="rounded-full sm:block lg:hidden sm:w-16 w-24 mt-5"
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
                          src={require("../../../Assets/bahr.jpg")}
                          className=" cursor-pointer rounded-full xl:w-52 lg:w-44 sm:w-16 2xl:mx-36 xl:mx-28 lg:mx-16 mt-10 z-10 lg:block hidden"
                          onClick={() => setShowCard(!showCard)}
                        />
                        <div className="lg:block hidden">
                          <img
                            src={
                              require("../../../Assets/Ellipse 3.svg").default
                            }
                            className="xl:w-28 lg:w-24 2xl:absolute 2xl:top-36 2xl:right-32 xl:absolute xl:top-36 xl:right-24 lg:absolute lg:top-32 lg:right-12 -z-10"
                            alt=""
                          />
                          <img
                            src={
                              require("../../../Assets/Ellipse 4.svg").default
                            }
                            className="xl:w-16 lg:w-14 2xl:absolute 2xl:top-4 2xl:right-44 xl:absolute xl:top-4 xl:right-36 lg:absolute lg:top-4 lg:right-24 -z-10"
                            alt=""
                          />
                          <img
                            src={
                              require("../../../Assets/Ellipse 5.svg").default
                            }
                            className="xl:w-24 lg:w-20 2xl:absolute 2xl:top-32 2xl:right-72 xl:absolute xl:top-32 xl:right-64 lg:absolute lg:top-32 lg:right-44 -z-10"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next">next arrow</div>
        <div className="swiper-button-prev">prev arrow</div>
      </div>
    </section>
  );
};

export default LandingTeacher;

/* 
                   
            
                    <div className="grid lg:grid-cols-2 w-7/12 m-auto rounded-3xl bg-[#F4F5F9]">
                      <div className="sm:mr-8 p-3 sm:ml-8 lg:ml-0">
                        <div className="flex justify-center">
                          <h2 className="text-xl my-5 sm:block lg:hidden hidden">
                            دکتر محمد حسین بحر العلومی
                          </h2>
                          <div className="md:mt-5 md:mr-14 sm:mt-5 lg:hidden sm:block">
                            <img
                              src={require("../../../Assets/bahr.jpg")}
                              className="rounded-full sm:block lg:hidden sm:w-16 w-24 mt-5"
                            />
                          </div>
                        </div>

                        <h2 className="sm:text-xl text-base xl my-5 ml-2 lg:block sm:hidden">
                          دکتر محمد حسین بحر العلومی
                        </h2>

                        <h4 className="sm:text-base text-sm text-[#615C67]">
                          دکترای هوش مصنوعی و رباتیک
                        </h4>
                        <p className="sm:text-sm text-xs mt-2 text-[#4A4453]">
                          دکتر محمد حسین بحر العلومی یکی از بزرگترین اساتید برتر
                          در میان 10 اساتید برتر کشور در حوضه هوش مصنوعی و علم
                          ربات میباشد, ایشون فارغ تحصیل دانشگاه صنعتی مشهد هستند
                          و جز نخبه های کشور محسوب میشوند, دکتر بحر همچنین صاحب
                          آکادمی سپهر میباشند
                        </p>
                        <Button classButton="text-white bg-[#5DC8B2] w-20 rounded-xl p-2 my-5 hover:scale-125 transition-transform ease-in duration-300 ">
                          بیشتر
                        </Button>
                      </div>

                      <div className="relative lg:block sm:hidden lg:mb-7 z-0">
                        <img
                          src={require("../../../Assets/bahr.jpg")}
                          className="rounded-full xl:w-52 lg:w-44 sm:w-16 2xl:mx-36 xl:mx-28 lg:mx-16 mt-10 z-10 lg:block hidden"
                        />
                        <div className="lg:block hidden">
                          <img
                            src={
                              require("../../../Assets/Ellipse 3.svg").default
                            }
                            className="xl:w-28 lg:w-24 2xl:absolute 2xl:top-36 2xl:right-32 xl:absolute xl:top-36 xl:right-24 lg:absolute lg:top-32 lg:right-12 -z-10"
                            alt=""
                          />
                          <img
                            src={
                              require("../../../Assets/Ellipse 4.svg").default
                            }
                            className="xl:w-16 lg:w-14 2xl:absolute 2xl:top-4 2xl:right-44 xl:absolute xl:top-4 xl:right-36 lg:absolute lg:top-4 lg:right-24 -z-10"
                            alt=""
                          />
                          <img
                            src={
                              require("../../../Assets/Ellipse 5.svg").default
                            }
                            className="xl:w-24 lg:w-20 2xl:absolute 2xl:top-32 2xl:right-72 xl:absolute xl:top-32 xl:right-64 lg:absolute lg:top-32 lg:right-44 -z-10"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
            
                
               */
