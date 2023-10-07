import Banner from "../../Header/Banner/Banner";
import MainServices from "../../MainServices/MainServices";
import YogaProducts from "../../YogaProducts/YogaProducts";



const Home = () => {
    return (
        <div className="mt-28">
              <Banner></Banner>
              <MainServices/>
             <div className="mt-5">
                <YogaProducts/>
             </div>
        </div>
    );
};

export default Home;