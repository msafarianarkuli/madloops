import { FieldName } from "./../../common/field-name-component/field-name.component";
import { Button } from "./../../common/button-component/button.component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const LandingBlog = () => {
  return (
    <div className="container">
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
      {/* <Button classButton="text-xl p-3 text-blue-600 outline rounded-2xl hover:bg-blue-600 hover:text-white transition ease-in-out delay-150">
        همه مطالب
      </Button> */}
      <Swiper
        // navigation={true}
        // modules={[Navigation]}
        className="w-11/12 h-full leading-tight rounded bg-[#4784DA] mt-16"
      >
        <SwiperSlide className="grid grid-cols-2">
          <div className="w-fit relative">
            <div className="bg-gray-100 absolute">
              <img
                src={require("../../../Assets/biden.jpg")}
                className="p-2"
                alt=""
              />
            </div>
          </div>
          <div className="mt-20 text-white">
            <div className="flex">
              <img
                src={require("../../../Assets/star-fill.svg").default}
                className="p-1"
                alt="star"
              />
              <h5 className="ml-5">برترین مقاله</h5>|
              <div className="mr-5 flex">
                <p className="pl-2">4</p> <h5>دقیقه مطالعه</h5>
              </div>
            </div>
            <Button classButton="w-6/12 font-bold text-2xl mt-8">
              در سال 1401، تیم هکر روسی با حمله به پایگاه داده یکی از شرکت
              های...
            </Button>
            <div className="flex mt-8">
              <h5 className="text-base  bg-eye-fill bg-no-repeat bg-right pr-5 mx-4">
                150 بازدید
              </h5>
              |
              <h5 className="text-sm  bg-eye-fill bg-no-repeat bg-right pr-5 mx-4">
                25 لایک
              </h5>
              |
              <h5 className="text-sm  bg-eye-fill bg-no-repeat bg-right pr-5 mx-4">
                15 نظر
              </h5>
            </div>
            <p className="w-10/12 mt-8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <Button classButton="text-base mt-10 mb-8">بیشتر بخوانید...</Button>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>
          <div>
            <h1>salam</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LandingBlog;
