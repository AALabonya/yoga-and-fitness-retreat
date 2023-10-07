import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
     <div className="flex-1 justify-center mt-32 lg:mt-52">
                <h2 className="text-center text-9xl font-bold">404</h2>
                <h3 className="text-center font-bold">Page Not Found</h3>
                <div className="flex justify-center">
                    <Link to="/"><button className="bg-blue-600 text-white mt-1 p-1 rounded-md">Go Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;