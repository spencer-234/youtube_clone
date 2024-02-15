import "./home.scss";
import axios from 'axios';
import { homeData } from "../../homeData.js";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import HomeTabs from "../../components/HomeTabs/HomeTabs.jsx";

const Home = () => {

    return (
        <div className="home">
            <Sidebar />
            <div className="mainPage">
                <HomeTabs />
            </div>
        </div>
    )
}

export default Home;