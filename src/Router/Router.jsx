import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPages/ErrorPage";
import YogaProducts from "../YogaProducts/YogaProducts";
import ServiceList from "../ServicePage/ServiceList";
import Register from "../Login/Register";
import Login from "../Login/Login";
import ViewShowDetails from "../ViewDetails/ViewShowDetails";
import PrivateRoute from "./PrivateRoute";


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
                element:<PrivateRoute><ServiceList/></PrivateRoute>
            },
            {
                path:"/shop",
                element:<PrivateRoute><YogaProducts></YogaProducts></PrivateRoute>
            },
            {
               path:"/service/:id",
               element:<ViewShowDetails></ViewShowDetails>,
               loader:()=>fetch('/data.json')
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