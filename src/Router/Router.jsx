import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import MainServices from "../MainServices/MainServices";

const myCreateRouter = createBrowserRouter([
    {
        path:"/",
        element:<MainRoot/>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader:()=> fetch('/data.json')
            },
            {
                path:"/services",
                element:<MainServices/>,
                loader:()=> fetch('/data.json')
            }
        ]
    },
   
])

export default myCreateRouter;