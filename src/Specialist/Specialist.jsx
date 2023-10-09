import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Specialist = () => {
    return (
        <section className="container my-10 mx-auto overflow-x-hidden" data-aos="zoom-in" data-aos-delay="0"
            data-aos-easing="ease" data-aos-duration="500">
            <div className="flex justify-center mt-10 ">
                <img src="https://i.ibb.co/1qVZJpB/logo1.webp" alt="" className="w-20" />
            </div>
            <p className="text-center font-bold">Our</p>
            <h1 className="text-center font-bold mt-2 text-4xl mb-2">Specialist</h1>
            <div className="hero w-auto lg:h-[550px] rounded-xl mt-10 " style={{ backgroundImage: 'url(https://i.ibb.co/R3fhVgw/healthy.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content bg-white">
                    <div className=" justify-center items-center">
                        <div className="">
                            <h1 className="mb-5 text-2xl lg:text-4xl font-bold text-black">Meet Our Experts</h1>
                            <p className="mb-5 text-black ">Experience the ultimate wellness retreat</p>

                        </div>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start text-start top-40 gap-20 md:gap-24 lg:gap-32 mt-10">

                                <div>
                                    <div className="flex justify-center">
                                        <img src="https://i.ibb.co/nCsNfNW/doctor1.webp" alt="" className="rounded-full p-20 lg:p-10" />
                                    </div>

                                    <h4 className="text-black text-center font-bold">Dr.Ron Overberg</h4>
                                    <p className="text-black text-center">Spa, Fitness, Meditation retreat expert</p>
                                </div>
                                <div>
                                    <div className="flex justify-center">
                                        <img src="https://i.ibb.co/DfHL58g/doctor4.jpg" alt="" className="rounded-full p-20 lg:p-10" />
                                    </div>
                                    <h4 className="text-black text-center font-bold">Dr.Catherine Li</h4>
                                    <p className="text-black text-center">Pregancy Pilates, Yoga & Body Balance Instructor</p>

                                </div>
                                <div>
                                    <div className="flex-1 justify-center">
                                        <img src="https://i.ibb.co/9qM1Jyv/doctor2.webp" alt="" className="rounded-full p-20 lg:p-10" />
                                        <h4 className="text-black text-center font-bold">Dr.Danial</h4>
                                        <p className="text-black text-center">Health, Bodybio & Biomedical Nutritionist</p>
                                    </div>


                                </div>
                                <div>
                                    <div className="flex justify-center">
                                        <img src="https://i.ibb.co/mbXDcNH/doctor3.jpg" alt="" className="rounded-full p-20 lg:p-12" />
                                    </div>
                                    <h4 className="text-black text-center font-bold">Aysha Siddika</h4>
                                    <p className="text-black text-center">Registered Dietitian and Nutritionist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Specialist;

