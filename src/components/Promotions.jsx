import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
const Promotions = () => {
  return (
    <section className="my-8 mt-20">
      <div className="max-w-screen-lg mx-auto">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          lazy={true}
        >
          <SwiperSlide>
            <img src="/assets/promotion1.jpg" alt="Promo 1" className="w-screen h-48 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/promotion1.jpg" alt="Promo 2" className="w-screen h-48 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/promotion1.jpg" alt="Promo 3" className="w-screen h-48 object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Promotions;
