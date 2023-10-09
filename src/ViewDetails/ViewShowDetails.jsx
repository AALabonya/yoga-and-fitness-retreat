import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewShowDetails = () => {

  const [view, setView] = useState([])

  const showDetails = useLoaderData()
  
  const id = useParams()

  useEffect(() => {
    const service = showDetails.find(service => service.id == id.id)
    setView(service)
  }, [showDetails, id])




  return (
   <div className="lg:flex lg:justify-center mt-32">
 <div className="card  bg-base-100 shadow-xl">
  <figure><img src={view?.image} alt="image" className="w-70 " /></figure>
  <div className="card-body">
    <h2 className="card-title">{view?.name}</h2>
    <p className="w-[250px] md:w-[600px] lg:w-[800px]">{view?.description1}</p>
    <div>
    <div className="">
              <div className="mb-4">
                <span className="font-bold">Schedule:<br /> Class : </span>
                {view?.schedule?.[0].class}
                <span className="font-bold"><br /> Day : </span>
                {view?.schedule?.[0].day}
                <br />
                <span className="font-bold"> Time : </span>
                {view?.schedule?.[0].time}
                <br />
              </div>
              <div>
                <span className="font-bold">Schedule 2:<br /> Class : </span>
                {view?.schedule?.[0].class1}
                <span className="font-bold"><br /> Day : </span>
                {view?.schedule?.[0].day1}
                <br />
                <span className="font-bold"> Time : </span>
                {view?.schedule?.[0].time1}
              </div>
              <p className="font-bold mb-2 mt-3">Price: {view?.price}</p>
            </div>
    </div>
    <div className="w-[200px] lg:w-[500px]">
           <span className="lg:text-xl text-green-800 font-bold">Our Facilities</span><br />
            <div className="md:w-[600px]">
            <span className="font-bold">{view?.facilities?.[0].name} :<br /></span>
           <span className=""> {view?.facilities?.[0].description} <br /></span>

            <span className="font-bold">{view?.facilities?.[1].name} :<br /></span>
            {view?.facilities?.[1].description}<br />

            <span className="font-bold">{view?.facilities?.[2].name} :<br /></span>
            {view?.facilities?.[2].description}<br />

            <span className="font-bold">{view?.facilities?.[3].name} :<br /></span>
            {view?.facilities?.[3].description}<br />

            <span className="font-bold">{view?.facilities?.[4].name} :<br /></span>
            {view?.facilities?.[4].description}<br />
            <span className="font-bold">{view?.facilities?.[5].name} :<br /></span>
            {view?.facilities?.[5].description}<br />
            </div>
           </div>
  </div>
</div>
   </div>
  );
};

export default ViewShowDetails;

