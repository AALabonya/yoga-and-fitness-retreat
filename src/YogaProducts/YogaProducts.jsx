

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import { useEffect, useState } from "react";
const YogaProducts = () => {

   const [products, setProducts] = useState([]);

   useEffect(()=>{
    fetch('/product.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
   },[])

   console.log(products);

    return (
        <div>
            <div className="flex justify-center mt-10 ">
                <img src="https://i.ibb.co/1qVZJpB/logo1.webp" alt="" className="w-20" />
            </div>
            <p className="text-center font-bold">Our Shop</p>
            <h1 className="text-center font-bold mt-2 text-4xl mb-2">Popular Products</h1>

            <section className='col-span-2'>
                <Swiper

                    slidesPerView={4}
                    spaceBetween={40}
                    modules={[Navigation, A11y]}>
                    {
                        products.map(product => <SwiperSlide key={product.id} className="p-2">

                           <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10 h-70">
                                    <img src={product.picture} alt="Shoes" className="rounded-xl h-52"/>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
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
