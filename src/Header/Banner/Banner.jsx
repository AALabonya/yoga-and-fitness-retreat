import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
  return (
    <div className='overflow-x-hidden lg:mt-20 mt-10' data-aos="zoom-in" >
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        navigation={true}
        modules={[Navigation, A11y]}
        className="mySwiper">

        <SwiperSlide>
          <div className='overflow-x-hidden' data-aos="zoom-in">
            <div className="relative mx-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/8gtfcKt/pic13.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
            </div>
            <div>
              <div className='text-center flex justify-center overflow-x-hidden'>
                <div data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" data-aos-duration="1000" className='absolute top-60 overflow-x-hidden'>

                  <h1 className='font-bold text-white text-xl lg:text-5xl mb-2'>Welcome To Our Yoga and and Fitness Retreats center.</h1>
                  <p className='font-semibold overflow-x-hidden text-white text-xs lg:text-xl'>You are welcome to visit our center where every person is treated with high attention</p>
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="zoom-in-left">
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/74HGZ2N/pic14.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
            </div>
            <div>
              <div className='text-center flex justify-center '>
                <div className='absolute top-60'>
                  <h1 className='font-bold text-white lg:text-5xl mb-2'> A complete Workout from head to toes.</h1>
                  <p className='font-semibold text-white lg:text-xl'>If you need advice on therapies , please contact use and we will be happy to assist you.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/Nj5jVgx/card1.webp"
                alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
            </div>
            <div>
              <div className='text-center flex justify-center '>
                <div className='absolute top-60'>
                  <h1 className='font-bold text-white lg:text-5xl mb-2'> Keeping Your Mind in Best Condition.</h1>
                  <p className='font-semibold text-white lg:text-xl'>We offer diverse health programs that included physical exercise, nutrition plans, yoga and meditation classes.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/3TKqnBJ/massage-spa-relaxing-treatment.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
            </div>
            <div>
              <div className='text-center flex justify-center '>
                <div className='absolute top-60'>
                  <h1 className='font-bold text-white lg:text-5xl mb-2'>We Welcome everyone in our community.</h1>
                  <p className='font-semibold text-white lg:text-xl'>If you need advice on therapies , please contact use and we will be happy to assist you.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/n1BRHq1/ok.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
            </div>
            <div>
              <div className='text-center flex justify-center'>
                <div className='absolute top-60'>
                  <h1 className='font-bold text-white lg:text-5xl mb-2'>All types of activities for everyone.</h1>
                  <p className='font-semibold text-white lg:text-xl'>If you need advice on therapies , please contact use and we will be happy to assist you.</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="zoom-in">
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.ibb.co/DDKXsNy/women.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
            </div>
            <div>
              <div className='text-center flex justify-center'>

                <div className='absolute top-60'>

                  <h1 className='font-bold text-white lg:text-5xl mb-2'>Join our classes for quality yoga practice .</h1>

                  <p className='font-semibold text-white text-xl'>If you need advice on therapies , please contact use and we will be happy to assist you.</p>

                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;