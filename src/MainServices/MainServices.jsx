import { useLoaderData } from "react-router-dom";
import Services from "./Services";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const MainServices = () => {

    const mainData = useLoaderData();

    return (
        <div className="overflow-x-hidden" data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-easing="ease" data-aos-duration="500">
            <div className="flex justify-center mt-16">
                <img src="https://i.ibb.co/1qVZJpB/logo1.webp" alt="" className="w-20" />
            </div>
            <p className="text-center font-bold">What We Offer</p>
            <h1 className="text-center font-bold mt-2 text-4xl mb-2">Our Main Services</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    mainData.map(data => <Services key={data.id} data={data}></Services>)
                }
            </div>



        </div>
    );
};

export default MainServices;