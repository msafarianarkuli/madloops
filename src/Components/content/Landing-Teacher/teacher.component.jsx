import Data from "../../../Core/services/Fake Service/Teacher";
import { BsFillCircleFill } from "react-icons/bs";
import { FieldName } from "./../../common/field-name-component/field-name.component";
import { Button } from "./../../common/button-component/button.component";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const LandingTeacher = () => {
  const { teachers } = Data;

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
          // navigation={true}
          // modules={[Navigation]}

          centeredSlides={true}
          centerInsufficientSlides={true}
          centeredSlidesBounds={false}
        >
          {teachers.map((item, index) => (
            <SwiperSlide className="m-auto flex" key={item.id}>
              {({ isActive, isPrev, isNext }) => (
                <>
                  {isPrev ? (
                    <div className="m-auto inline-block rounded-full p-5 bg-gray-200">
                      <img
                        src={require("../../../Assets/bahr.jpg")}
                        className="rounded-full w-48"
                        alt=""
                      />
                    </div>
                  ) : null}
                  {isActive ? (
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
                  ) : null}
                  {isNext ? (
                    <div className="m-auto inline-block rounded-full p-5 opacity-75 bg-gray-200">
                      <img
                        src={require("../../../Assets/bahr.jpg")}
                        className="rounded-full w-48"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LandingTeacher;
