import react from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src="./images/macbook.png"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./images/macbook.png"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./images/macbook.png"></img>
        </SwiperSlide>
    
      </Swiper>
    </div>
  );
};
export default Slider;
