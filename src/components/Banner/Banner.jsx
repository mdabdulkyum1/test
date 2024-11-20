import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import donate1 from "../../assets/donate1.png";
import donate2 from "../../assets/donate2.jpg";
import donate3 from "../../assets/donate3.jpeg";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
AOS.init({
  
});
AOS.refresh();
function Banner() {
  return (
    <div className="py-16">
      <Swiper
      
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="">
            <div className="flex flex-col lg:flex-row items-center w-5/6 mx-auto">
              <div className="" data-aos="fade-up" >
                <h1 className="text-4xl font-extrabold text-heading">
                  Winter Clothing Donation
                </h1>
                <p className="text-primary-text my-3 lg:w-1/2">
                  Help us provide warmth to those in need this winter. Donate
                  your gently used or new winter clothing such as coats,
                  scarves, gloves, and boots. Your contribution can make a huge
                  difference in someone,s life, providing them with the warmth
                  they need to survive the cold months.
                </p>
                <Link to="/campaigns" className="btn bg-ice-blue hover:bg-frosty-blue">
                  Donate Now
                </Link>
              </div>
              <div className="w-4/5" data-aos="fade-right">
                <img src={donate1} alt="" />
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="">
            <div className="flex flex-col lg:flex-row items-center w-5/6 mx-auto">
              <div className="" data-aos="fade-right">
                <h1 className="text-4xl font-extrabold text-heading">
                  Help Keep Someone Warm This Winter
                </h1>
                <p className="text-primary-text my-3 lg:w-1/2">
                  Together, we can make sure no one has to endure the cold
                  without proper clothing. Donate today and help us spread
                  warmth to those in need.
                </p>
                <Link to="/campaigns" className="btn bg-ice-blue hover:bg-frosty-blue">
                  Donate Now
                </Link>
              </div>
              <div className="w-4/5">
                <img src={donate2} alt="Keep Someone Warm" className="rounded-2xl "/>
              </div>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="">
            <div className="flex flex-col lg:flex-row items-center w-5/6 mx-auto">
              <div className="" data-aos="fade-right">
                <h1 className="text-4xl font-extrabold text-heading">
                  Join Our Winter Clothing Drive
                </h1>
                <p className="text-primary-text my-3 lg:w-1/2">
                  Your donation can make a huge impact. Help families in need by
                  donating coats, gloves, scarves, and other warm clothing.
                  Every piece counts!
                </p>
                <Link to="/campaigns" className="btn bg-ice-blue hover:bg-frosty-blue">
                  Donate Now
                </Link>
              </div>
              <div className="w-4/5">
                <img src={donate3} alt="Join Winter Clothing Drive" className="rounded-2xl h-[350px]"/>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
