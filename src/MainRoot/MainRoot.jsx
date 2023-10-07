import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar/NavBar";
import Footer from "../Footer/Footer";


const MainRoot = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
           <Footer/>
        </div>
    );
};
export default MainRoot;
