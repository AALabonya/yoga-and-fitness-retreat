import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import YogaProducts from "../YogaProducts/YogaProducts";
import ServiceList from "../ServicePage/ServiceList";
import Register from "../Login/Register";
import Login from "../Login/Login";


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
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    },
   
])

export default myCreateRouter;