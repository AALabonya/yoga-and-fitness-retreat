import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import Picture1 from "./../../../src/assets/yoga/pic1333.jpg"
import pic7 from "./../../../src/assets/yoga/pic7.jpg"
import Picture4 from "./../../../src/assets/yoga/picture4.jpg"
import Picture5 from "./../../../src/assets/yoga/cover11.jpg"
import Picture6 from "./../../../src/assets/yoga/ok.jpg"
import Picture7 from "./../../../src/assets/yoga/pic14.jpg"


const Banner = () => {
    return (
        <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation,A11y]}
          className="mySwiper lg:h-[600px]">
            
          <SwiperSlide><img src={Picture1 } alt=""  className='w-[1600px]'/></SwiperSlide>
          <SwiperSlide><img src={pic7} alt=""  className='w-[1600px]'/></SwiperSlide>
          <SwiperSlide><img src={Picture4} alt=""  className='w-[1600px]'/></SwiperSlide>
          <SwiperSlide><img src={Picture5 } alt=""  className='w-[1600px]'/></SwiperSlide>
          <SwiperSlide><img src={Picture6} alt=""  className='w-[1600px]'/></SwiperSlide>
          <SwiperSlide><img src={Picture7} alt=""  className='w-[1600px]'/></SwiperSlide>

        </Swiper>
      </div>
      );
};

export default Banner;