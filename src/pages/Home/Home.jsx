import Contracts from "../../Contract/Contracts";
import Banner from "../../Header/Banner/Banner";
import MainServices from "../../MainServices/MainServices";
import Specialist from "../../Specialist/Specialist";
import YogaProducts from "../../YogaProducts/YogaProducts";



const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <MainServices />
             <Specialist />
            <YogaProducts />
            <Contracts />


        </div>
    );
};

export default Home;