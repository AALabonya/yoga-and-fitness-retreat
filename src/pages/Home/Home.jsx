import Banner from "../../Header/Banner/Banner";
import NavBar from "../../Header/NavBar/NavBar";
import MainServices from "../../MainServices/MainServices";

const Home = () => {
    return (
        <div>
            <div><NavBar></NavBar></div>
              <Banner></Banner>
              <MainServices/>
        </div>
    );
};

export default Home;