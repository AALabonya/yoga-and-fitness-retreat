import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper/modules';
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
    <div className='mt-5'>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, A11y]}
        className="mySwiper lg:h-[600px]">

        <SwiperSlide>
          <div className="relative mx-4 -mt-6 h-[] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src={Picture1}
              alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative mx-4 -mt-6 h-[] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src={pic7}
              alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="relative mx-4 -mt-6 h-[] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src={Picture4}
              alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative mx-4 -mt-6 h-[] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src={Picture5}
              alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative mx-4 -mt-6 h-[] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src={Picture6}
              alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative mx-4 -mt-6 h-[] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src={Picture7}
              alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;