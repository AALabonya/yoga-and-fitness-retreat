import { AiFillEnvironment, AiFillMail, AiFillPhone } from "react-icons/ai";
const Contracts = () => {
    return (
        <div>
            <div className="mt-10">
                <div className="flex justify-center mb-5">
                    <img src="https://i.ibb.co/1qVZJpB/logo1.webp" alt="" className="w-20" />
                </div>
                <div className=" ">
                    <div className="">
                        <div className="grid lg:grid-cols-2 text-center lg:ml-72">
                            <div className="lg:text-start">

                                <p className="font-bold mb-4 mt-3">Get In Touch</p>
                                <h1 className="text-5xl font-bold text-green-900">Contacts Us!</h1>
                                <p className="py-6 w-[380px]">We are happy to answer any questions you may have! Please fill out the contract form and we will respond as soon as possible.</p>
                            <div className="flex items-center gap-2 mt-5">
                               <div > <AiFillEnvironment className="w-10 h-12 text-green-900"></AiFillEnvironment> </div>
                               <div><h1 className="text-xl font-semibold">Address</h1> <p>Gulshan, Dhaka, Bangladesh</p></div>
                            </div>
                            <div className="flex items-center gap-2 mt-6">
                               <div > <AiFillPhone className="w-10 h-12 text-green-900"></AiFillPhone></div>
                               <div><h1 className="text-xl font-semibold">Call</h1> <p>+088</p></div>
                            </div>
                            <div className="flex items-center gap-2 mt-6">
                               <div > <AiFillMail className="w-10 h-12 text-green-900"></AiFillMail> </div>
                               <div><h1 className="text-xl font-semibold">Mail Us</h1> <p>1aklimakter@gmail.com</p></div>
                            </div>
                            
                            </div>

                            <div className="card w-full lg:max-w-sm shadow-2xl bg-base-100">
                                <form className="card-body">
                                    <div className="form-control">
                                        <input type="email" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="email" placeholder="Email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="email" placeholder="Password" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <input type="Password" placeholder="Subject" className="input input-bordered" required />
                                    </div>

                                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message.."></textarea>
                                    <div className="flex items-center mb-4">
                                        <input checked id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree that my submitted data is being collected and stored.</label>
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn bg-green-700 text-white">Submit</button>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Contracts;