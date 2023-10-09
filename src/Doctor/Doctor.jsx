/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Doctor = ({ doctor }) => {

  return (
    <div className="flex justify-center mt-5">
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={doctor.img} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title">{doctor.name}</h2>
    <p>{doctor.education}</p>
    <p>{doctor.degree1}</p>
    <p>{doctor.degree2}</p>
    <h4>{doctor.title}</h4>
    <div>
    <div>
       <p> {doctor.description}</p>
      <p> <span className="font-bold">Chamber-Hours:</span> {doctor.chamberHours}</p>
      <p> <span className="font-bold">`quotation`:</span> {doctor.quotation}</p>
    </div>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"> Appointment</button>
    </div>
  </div>
</div>

     
    </div>
  );
};

export default Doctor;

