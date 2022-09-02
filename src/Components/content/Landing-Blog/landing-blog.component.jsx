import { FieldName } from "./../../common/field-name-component/field-name.component";
import { Button } from "./../../common/button-component/button.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const LandingBlog = () => {
  return (
    <div className="container m-auto relative">
      <div className="text-center mt-5">
        <FieldName
          showH2
          showP
          classH2Field="text-neutral-900 font-bold text-3xl mr-4"
          title="مقالات و خبر ها"
          classPfield="text-slate-400 mt-2"
          field="با خبر های ما بروز باشید"
        />
      </div>
      <Button classButton="2xl:absolute 2xl:top-48 2xl:left-16 xl:absolute xl:top-48 xl:left-14 lg:absolute lg:top-52 lg:left-11 z-10 xl:text-xl xl:p-3 md:text-base md:p-2 text-blue-600 outline rounded-xl hover:bg-blue-600 hover:text-white transition ease-in-out delay-150 lg:block sm:hidden">
        همه مطالب
      </Button>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-11/12 sm:mt-6 rounded z-0"
      >
        <SwiperSlide>
          <div className="grid grid-cols-2 lg:mt-48 bg-[#4784DA]">
            <div className="2xl:w-fit 2xl:absolute 2xl:top-10 2xl:right-18 xl:w-[26rem] 2xl:m-0 xl:m-0 xl:absolute xl:top-16 xl:right-24 lg:m-0 lg:w-[22rem] lg:absolute lg:top-28 lg:right-16 md:w-[14rem] md:mx-16 md:my-6 sm:w-[12rem] rounded-t-xl  bg-slate-400 z-100">
              <img
                src={require("../../../Assets/biden.jpg")}
                className="lg:p-2 w-full lg:rounded-t-xl scale-100 hover:scale-105 transition duration-500 hover:animate-pulse cursor-pointer"
                alt=""
              />
            </div>
            <div className="2xl:mt-20 xl:mt-12 md:mt-10 sm:mt-4 md:mr-6 text-white col-start-2 col-span-4">
              <div className="flex lg:leading-6 sm:leading-2">
                <img
                  src={require("../../../Assets/star-fill.svg").default}
                  className="p-1 lg:w-fit sm:w-6"
                  alt="star"
                />
                <h5 className="md:ml-5 sm:ml-3 lg:text-base sm:text-xs">
                  برترین مقاله
                </h5>
                <span className="mb-1">|</span>
                <div className="md:mr-5 sm:mr-3 flex">
                  <p className="md:pl-2 sm:pl-1 lg:text-base sm:text-xs">4</p>
                  <h5 className="lg:text-base sm:text-xs">دقیقه مطالعه</h5>
                </div>
              </div>
              <Button classButton="w-10/12 text-right font-bold  2xl:mt-8 xl:text-2xl xl:mt-6 lg:mt-4 md:mt-6">
                در سال 1401، تیم هکر روسی با حمله به پایگاه داده یکی از شرکت
                های...
              </Button>
              <div className="lg:flex 2xl:mt-8 xl:mt-6 lg:mt-4 md:mt-6">
                <h5 className="2xl:text-base xl:text-sm lg:text-xs md:text-[12px] bg-eye-fill md:bg-[length:12px] md:leading-5 bg-no-repeat bg-right pr-5 lg:ml-4">
                  150 بازدید
                </h5>
                <span className="lg:block sm:hidden">|</span>
                <h5 className="2xl:text-base xl:text-sm lg:text-xs md:text-[12px] bg-heart-fill md:bg-[length:12px] md:leading-5 bg-no-repeat bg-right pr-5 lg:mx-4">
                  25 لایک
                </h5>
                <span className="lg:block sm:hidden">|</span>
                <h5 className="2xl:text-base xl:text-sm lg:text-xs md:text-[12px] bg-comment-fill md:bg-[length:12px] md:leading-5 bg-no-repeat bg-right pr-5 lg:mx-4">
                  15 نظر
                </h5>
              </div>
              <p className="w-10/12 2xl:mt-8 xl:mt-6 lg:mt-4 text-right 2xl:text-base xl:text-sm lg:text-xs lg:block lg:leading-relaxed sm:hidden">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <Button classButton="xl:text-base sm:text-sm 2xl:my-10 xl:my-8 lg:my-6 md:my-6">
                بیشتر بخوانید...
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>salam</SwiperSlide>
      </Swiper>
      <Button classButton="sm:mx-auto sm:mt-10 md:text-base md:p-2 sm:p-1 text-blue-600 outline rounded-xl hover:bg-blue-600 hover:text-white transition ease-in-out delay-150 lg:hidden sm:block">
        همه مطالب
      </Button>
    </div>
  );
};

export default LandingBlog;
