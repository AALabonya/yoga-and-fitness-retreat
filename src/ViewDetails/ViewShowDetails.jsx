import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewShowDetails = () => {

    const[view, setView]=useState([])

    const showDetails = useLoaderData()
console.log(showDetails);

    const id  = useParams()
     
    console.log(id);

   useEffect(()=>{
    const service = showDetails.find(service => service.id == id.id)
      setView(service)
   },[showDetails,id])

    


    return (
       <div className="mt-32 flex justify-center w-full">
         <div className="relative flex flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={view?.image}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {view?.name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {view?.name}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          {view?.description}
          </p>
           <p>{view?.price}</p>
        </div>
      </div>
       </div>
    );
};

export default ViewShowDetails;