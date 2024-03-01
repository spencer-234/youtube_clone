import "./home.scss";
import HomeTabs from "../../components/HomeTabs/HomeTabs.jsx";
import Video from "../../components/Video/Video.jsx";
import { homeData } from "../../homeData.js";

const Home = () => {

    return (
        <div className="home">
            <HomeTabs />
            <div className="videos">
                {homeData.map((video) => <Video data={video} key={video.video.videoId} />)}
            </div>
        </div>
    )
}

export default Home;