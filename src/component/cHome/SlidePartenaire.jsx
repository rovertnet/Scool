// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const SlidePartenaire = () => {
  return (
    <>
      <div className="md:mx-10 mx-10 md:my-10 my-10">
        <h2 className="text-xl uppercase md:text-2xl font-bold text-center py-7 md:py-10 md:mb-10 mb-8">
          Nos Partenaires
        </h2>
        <div className="flex justify-center items-center text-black font-extrabold">
          <div className="max-w-5xl">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="h-96 flex">
                  <div className={'card'}></div>
                </div>
              </SwiperSlide>
              ...
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidePartenaire;
