import Healthy from "./../../src/assets/yoga/healthy.jpg"
import Doctor1 from "./../../src/assets/yoga/doctor1.webp"
import Doctor2 from "./../../src/assets/yoga/doctor2.webp"
import Doctor3 from "./../../src/assets/yoga/doctor3.jpg"
import Doctor4 from "./../../src/assets/yoga/doctor4.jpeg"
const Specialist = () => {
    return (
        <section className="container my-20 mx-auto">
             <div className="flex justify-center mt-10 ">
                <img src="https://i.ibb.co/1qVZJpB/logo1.webp" alt="" className="w-20" />
            </div>
            <p className="text-center font-bold">Our Shop</p>
            <h1 className="text-center font-bold mt-2 text-4xl mb-2">Specialist</h1>
        <div className="hero  w-auto lg:h-[550px] rounded-xl mt-10 " style={{ backgroundImage: `url(${Healthy})` }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className=" justify-center items-center">
               <div className="">
                <h1 className="mb-5 text-2xl lg:text-4xl font-bold text-white">Meet Our Experts</h1>
                <p className="mb-5 text-white ">Contrary to popular belief, is not simply random text. It has roots in a piece of classical<br/> Latin literature from 45 BC, making it over 2000 years old.</p>
                   
               </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-start text-start top-40 gap-20 md:gap-24 lg:gap-32 mt-10">
        
                        <div>
                            <div className="flex justify-center">
                                <img src={Doctor1} alt="" className="rounded-full p-20 lg:p-10"/>
                            </div>
                            
                            <h4 className="text-white text-center font-bold">Dr.Ron Overberg</h4>
                            <p className="text-white text-center">Spa, Fitness, Meditation retreat expert</p>
                           </div>
                           <div>
                            <div className="flex justify-center">
                                <img src={Doctor4} alt="" className="rounded-full p-20 lg:p-10"/>
                            </div>
                            <h4 className="text-white text-center font-bold">Dr.Catherine Li</h4>
                            <p className="text-white text-center">Pregancy Pilates, Yoga & Body Balance Instructor</p>
                            
                           </div>
                           <div>
                            <div className="flex-1 justify-center">
                                <img src={Doctor2} alt="" className="rounded-full p-20 lg:p-10"/>
                                <h4 className="text-white text-center font-bold">Dr.Danial</h4>
                            <p className="text-white text-center">Health, Bodybio & Biomedical Nutritionist</p>
                            </div>
                           
                           
                           </div>
                           <div>
                            <div className="flex justify-center">
                                <img src={Doctor3} alt="" className="rounded-full p-20 lg:p-12"/>
                            </div>
                            <h4 className="text-white text-center font-bold">Aysha Siddika</h4>
                            <p className="text-white text-center">Registered Dietitian and Nutritionist</p>
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

// https://i.ibb.co/9r8mF8W/PT-Banner.jpg