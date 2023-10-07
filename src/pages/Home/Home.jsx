import Banner from "../../Header/Banner/Banner";
import MainServices from "../../MainServices/MainServices";
import Specialist from "../../Specialist/Specialist";
import YogaProducts from "../../YogaProducts/YogaProducts";



const Home = () => {
    return (
        <div className="mt-28">
              <Banner></Banner>
              <MainServices/>
             <div className="mt-5">
             <Specialist/>
                <YogaProducts/>
             </div>
           
        </div>
    );
};

export default Home;