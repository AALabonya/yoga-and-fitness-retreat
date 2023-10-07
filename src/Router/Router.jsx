import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import MainServices from "../MainServices/MainServices";
import YogaProducts from "../YogaProducts/YogaProducts";
import ServiceList from "../ServicePage/ServiceList";

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
                element:<ServiceList/>
            },
            {
                path:"/shop",
                element:<YogaProducts></YogaProducts>
            }
        ]
    },
   
])

export default myCreateRouter;