/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import swal from 'sweetalert';

const Login = () => {

    const [logInError, setLogInError] = useState('')

    const { signIn, googleSignIn } = useContext(AuthContext)

    const location = useLocation()


    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value
        const password = e.target.password.value

        signIn(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/")
                swal("Good job!", "Log in Successful!", "success")

            })
            .catch(() => {
                setLogInError("Invalid Email and password")
            })

        e.target.reset()

    }

    const handleGoogle = e => {
        e.preventDefault()

        googleSignIn()
            .then(() => {
                swal("Good job!", "Google log in Successful!!", "success");
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div className="lg:mt-32 flex justify-center">

            <div className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleLogin} className="space-y-6">
                    <h5 className="text-2xl font-bold text-center bg-green-600 rounded-lg py-4 w-full text-white dark:text-white">LogIn</h5>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border input border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">

                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500 ml-2">Forget Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none rounded-lg py-2">Login</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300 ">
                        New here?  Please <Link to="/register" className="text-blue-700 hover:underline dark:text-blue-500 ">Register</Link>

                    </div>
                    <Link> <p className="text-center mt-5"><button onClick={handleGoogle} className="btn border-blue-500 font-bold text-blue-500"><FaGoogle className="text-blue-500"></FaGoogle> Login with Google</button></p></Link>

                </form>
                {
                    logInError && <p className="text-red-400">{logInError}</p>
                }
            </div>

        </div>
    );
};

export default Login;



