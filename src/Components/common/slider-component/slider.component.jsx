import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Children } from "react";

const SliderComponent = ({ children, className, ...props }) => {
  return (
    <>
      <Swiper className={className} {...props}>
        {Children}
      </Swiper>
    </>
  );
};

export default SliderComponent;
