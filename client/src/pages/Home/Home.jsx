import "./home.scss";
import axios from 'axios';
import { homeRequest } from "./homeOptions.js";
import { useQuery } from "@tanstack/react-query";
import HomeTabs from "../../components/HomeTabs/HomeTabs.jsx";
import Video from "../../components/Video/Video.jsx";
import { homeData } from "../../homeData.js";

const Home = () => {

    // const { isLoading, isError, data } = useQuery({
    //     queryKey: ["videos"],
    //     queryFn: async () => await axios.request(homeRequest)
    //         .then(res => {
    //             return res.data;
    //         })
    //         .catch(err => console.error(err)),
    //     staleTime: Infinity,
    // })

    return (
        <div className="home">
            <HomeTabs />
            <div className="videos">
                {/* {isLoading
                ? "Loading"
                : data.contents.map((video) => <Video data={video} key={video.video.videoId} />)} */}
                {homeData.map((video) => <Video data={video} key={video.video.videoId} />)}
            </div>
        </div>
    )
}

export default Home;