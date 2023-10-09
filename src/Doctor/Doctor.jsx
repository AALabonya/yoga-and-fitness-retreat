/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Doctor = ({doctor}) => {
   
    return (
        <div className="flex justify-center mt-5">
           

           <div className="relative flex w-full max-w-[68rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={doctor.img}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-2 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
    {doctor.name}
    </h6>
      <h6 className="mb-2 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
        {doctor.education}</h6>
    <h6 className="mb-2 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
    {doctor.degree1}
   <span>, {doctor.degree2}</span>
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    {doctor.title}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
    {doctor.description}
    </p>

      <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      <span className="font-bold">Chamber-Hours:</span> {doctor.chamberHours}
        </p>
        <h2 className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
           <span className="font-bold">`quotation`:</span> {doctor.quotation}
        </h2>
   
      <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase bg-green-800 text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Appointment
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
         
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>

  </div>
</div>

        </div>
    );
};

export default Doctor;