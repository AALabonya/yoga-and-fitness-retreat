
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const YogaProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='overflow-x-hidden'>
            <div className='mt-5'>
                <div className="relative mx-4 -mt-6 h-[] rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img
                        src="https://i.ibb.co/Sxtm18K/female-is-stretching-her-body-floor-rest-room-613910-9062.jpg"
                        alt="img-blur-shadow" className="w-[1600px] h-[600px]" />
                </div>
            </div>
            <div className="flex justify-center mt-10 ">
                <img src="https://i.ibb.co/1qVZJpB/logo1.webp" alt="" className="w-20" />
            </div>
            <p className="text-center font-bold">Our Shop</p>
            <h1 className="text-center font-bold mt-2 text-4xl mb-2">Popular Products</h1>

            <section className='col-span-2 overflow-x-hidden' data-aos="zoom-in" data-aos-delay="0"
        data-aos-easing="ease" data-aos-duration="500">
                <Swiper

                    breakpoints={{
                        570: { slidesPerView: 1, spaceBetween: 40 },
                        768: { slidesPerView: 2, spaceBetween: 10 },
                        1152: { slidesPerView: 3.5, spaceBetween: 50 }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation, Pagination, A11y]}
                >
                    {
                        products.map(product => <SwiperSlide key={product.id} className="p-2">
                            <div className="card w-90 lg:w-96 md:w-96bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10 h-70">
                                    <img src={product.picture} alt="Shoes" className="rounded-xl h-52" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{product.name}</h2>
                                    <p>${product.price}</p>
                                    <div className="card-actions">
                                        <button className="btn bg-green-600 text-white">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }



                </Swiper>



            </section>


        </div>
    );
};

export default YogaProducts;


// Sport Sneakers
// $49.00
// Rated
// 5.00
// out of 5

// Premium Yoga Mat
// $125.00 – $165.00
// Rated
// 4.00
// out of 5
