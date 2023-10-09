
import { useContext, useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthProvider";
import swal from 'sweetalert';

const Register = () => {

    const [showError, setShowError] = useState('')

    const navigate = useNavigate()
    const { createUser, logOut, updateUser } = useContext(AuthContext)



    const handleRegister = e => {

        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.img.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, image, email, password);

        //password
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            setShowError("Password should be 6 character minimum with a number, an uppercase and a special character");
            return
        } else {
            createUser(email, password)
                .then((result) => {

                    swal("Good job!", "Registration Successful!", "success");
                    if (result.user) {
                        updateUser({
                            displayName: name,
                            photoURL: image
                        })
                    }
                    navigate("/login")
                    logOut()
                })
                .catch(error => {
                    console.log(error);
                })
        }
        e.target.reset()
    }

    return (
        <div className="lg:mt-28 md:mt-28 flex justify-center">

            <div className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleRegister} className="space-y-6">
                    <h5 className="text-2xl font-bold text-center bg-green-600 rounded-lg py-4 w-full text-white dark:text-white">Create an Account</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
                        <input type="text" placeholder="Photo url" name='img' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label
                                className="mt-px cursor-pointer select-none font-light text-gray-700"
                            >
                                <p className="flex items-center font-sans text-sm font-normal leading-normal text-blue-700 antialiased ml-1">
                                    Terms and Conditions
                                </p>
                            </label>
                        </div>
                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500 ml-12">Forget Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none rounded-lg py-2">Register</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Have an account?  Please <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                    </div>
                </form>
                {
                    showError && <p className="text-red-400">{showError}</p>
                }
            </div>

        </div>
    );
};

export default Register;