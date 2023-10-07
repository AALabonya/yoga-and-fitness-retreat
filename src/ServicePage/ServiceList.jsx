import { useEffect, useState } from "react";
import ServiceData from "./ServiceData";


const ServiceList = () => {
    const[data, setData]=useState([])


    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
        },[])
   
  
    return (
        <div className="mt-28">
            <div>

            <div className="h-[500px] " style={{backgroundImage: 'url(https://i.ibb.co/N27G3Qh/yogaex.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', }}>

              </div>
            </div>
        <div className="flex justify-center mt-16">
        <img src="https://i.ibb.co/1qVZJpB/logo1.webp" alt="" className="w-20" />
        </div>
        <p className="text-center font-bold">What We Offer</p>
        <h1 className="text-center font-bold mt-2 text-4xl mb-2">Our Main Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                data.map(item =><ServiceData key={item.id}  item={item}></ServiceData>)
            }
        </div>



    </div>
    );
};

export default ServiceList;