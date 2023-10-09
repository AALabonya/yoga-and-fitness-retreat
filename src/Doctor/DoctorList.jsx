import { useEffect, useState } from "react";
import Doctor from "./Doctor";


const DoctorList = () => {
    const [doctorList, setDoctorList] = useState([])

    useEffect(() => {
        fetch("/doctor.json")
            .then(res => res.json())
            .then(data => setDoctorList(data))
    }, [])



    return (
        <div >
            <div className="relative mx-4 -mt-6 h-[] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                    src="https://i.ibb.co/1rFC4n5/healthcare-medical.webp"
                    alt="img-blur-shadow" className="w-[1600px] h-[600px]" />

            </div>
            <div>
                <div className="flex justify-center mt-10">
                <img src="https://i.ibb.co/1qVZJpB/logo1.webp" alt="" className="w-20" />
            </div>
                <h1 className="text-center font-bold mt-1 text-4xl mb-3">Our Specialist</h1></div>
            <div className="grid grid-cols-1 gap-6 mt-5">
                {
                    doctorList.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>

        </div>
    );
};

export default DoctorList;