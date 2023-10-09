import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewShowDetails = () => {

  const [view, setView] = useState([])

  const showDetails = useLoaderData()
  console.log(showDetails);

  const id = useParams()

  console.log(id);

  useEffect(() => {
    const service = showDetails.find(service => service.id == id.id)
    setView(service)
  }, [showDetails, id])




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
          <h4 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased text-green-800">
            {view?.name}
          </h4>
          <p className="mb-4 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {view?.description1}
          </p>
          <div className="mb-4 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            <div className="flex lg:gap-10">
              <div>
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
            </div>
          </div>
          <p className="mb-4 font-bold block font-sans text-base leading-relaxed text-gray-700 antialiased">Price: {view?.price}</p>
          <p className="mb-4 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            <span className="lg:text-xl text-green-800 font-bold">Our Facilities</span><br />
            <span className="font-bold">{view?.facilities?.[0].name} :<br /></span>
            {view?.facilities?.[0].description} <br />

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
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewShowDetails;