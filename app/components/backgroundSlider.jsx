import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BackgroundSwiper = () => {
    return (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img
             src="/PlayStation-banner.webp"
             alt="PlayStation Banner"
             className="w-full object-cover opacity-95"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
             src="/nba-banner.jpeg"
             alt="Nba Banner"
             className="w-full object-cover opacity-95"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
             src="/God-of-war-banner.webp"
             alt="God of War Banner"
             className="w-full object-cover opacity-95" 
            />
          </SwiperSlide>
          <SwiperSlide>
          <img
             src="/spiderman-banner.jpeg"
             alt="Spiderman Banner"
             className="w-full object-cover opacity-95" 
            />
          </SwiperSlide>
          <SwiperSlide>
          <img
             src="/Samsung-phone-banner.jpeg"
             alt="Samsung phone Banner"
             className="w-full object-cover opacity-95" 
            />
          </SwiperSlide>
          <SwiperSlide>
          <img
             src="/Samsung-tv.jpeg"
             alt="Samsung tv Banner"
             className="w-full object-cover opacity-95" 
            />
          </SwiperSlide>
          <SwiperSlide>
          <img
             src="/iwatch-banner.jpeg"
             alt="iWatch Banner"
             className="w-full object-cover opacity-95" 
            />
          </SwiperSlide>
        </Swiper>
      );
    };

export default BackgroundSwiper;
