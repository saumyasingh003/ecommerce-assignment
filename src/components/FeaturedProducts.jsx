import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation , Autoplay, Pagination} from 'swiper/modules';


const products = [
  { name: 'Amazon Alexa', img: '/assets/electronic1.jpg', price: '₹2000/-' },
  { name: 'Utensils Stand', img: '/assets/kitchen3.jpg', price: '₹250/-' },
  { name: 'Headphone', img: '/assets/electronic2.jpg', price: '₹3000/-' },
  { name: 'Gift', img: '/assets/gift1.jpg', price: '₹350/-' },
  { name: 'Phone', img: '/assets/electronic3.jpg', price: '₹20000/-' },
  
  
];

const FeaturedProducts = () => {
  return (
    <section className="my-8">
      <h2 className="md:text-3xl font-bold text-center text-black mb-10 bg-white p-4">TRENDING PRODUCTS</h2>
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        autoplay={{
          delay: 1500,
          
        }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="swiper-container"
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow bg-[#317bf0]">
              <img src={product.img} alt={product.name} className="w-full h-60 object-fit"/>
              <h3 className="mt-2 text-sm md:text-base lg:text-2xl font-semibold text-center text-white">{product.name}</h3>
              <p className="text-white text-sm md:text-base text-center font-bold">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeaturedProducts;
