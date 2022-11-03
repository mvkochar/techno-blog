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
            <img src="./images/macbook.png" alt="macbook"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./images/teahub.jpg" alt="teahub"></img>
        </SwiperSlide>
        <SwiperSlide>
            <img src="./images/fabian.jpg" alt="fabian"></img>
        </SwiperSlide>
    
      </Swiper>
    </div>
  );
};
export default Slider;
