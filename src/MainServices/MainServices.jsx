import { useLoaderData } from "react-router-dom";
import Service from "./Service";




const MainServices = () => {
 
    const mainData = useLoaderData();
    console.log(mainData);

    return (
        <div>
         
            <div className="flex justify-center mt-16">
            <img src="https://i.ibb.co/1qVZJpB/logo1.webp" alt="" className="w-20" />
            </div>
            <p className="text-center font-bold">What We Offer</p>
            <h1 className="text-center font-bold mt-2 text-4xl mb-2">Our Main Services</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {
                    mainData.map(data=><Service key={data.id} data={data}></Service>)
                  }  
              </div>



        </div>
    );
};

export default MainServices;