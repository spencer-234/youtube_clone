import "./home.scss";
import axios from 'axios';
import { homeData } from "../../homeData.js";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const Home = () => {

    return (
        <div className="home">
            <Sidebar />
        </div>
    )
}

export default Home;