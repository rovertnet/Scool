import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SlidePartenaire = () => {
  return (
    <>
      <div className="md:mx-10 mx-10 md:my-10 my-10">
        <h2 className="text-xl uppercase md:text-2xl font-bold text-center py-7 md:py-10 md:mb-10 mb-8">
          Nos Partenaires
        </h2>
        <div className="flex justify-center items-center text-black font-extrabold">
          <div className=" md:max-w-5xl max-w-3xl">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={100}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: false }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>Noviexar</SwiperSlide>
              <SwiperSlide>Skyewave</SwiperSlide>
              <SwiperSlide>NexaCore</SwiperSlide>
              <SwiperSlide>EliteXcel</SwiperSlide>
              <SwiperSlide>Zenithron</SwiperSlide>
              <SwiperSlide>Ennovatek</SwiperSlide>
              <SwiperSlide>Infinitumix</SwiperSlide>
              <SwiperSlide>SpectraFuse</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidePartenaire;
