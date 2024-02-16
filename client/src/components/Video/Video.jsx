import "./video.scss";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Video = ({ data }) => {

    return (
        <div className="video">
            <Link to={`https://www.youtube.com/watch?v=${data.video.videoId}`}>
                <img src={data.video.thumbnails[0].url} alt="Video Thumbnail" className="thumbnail"/>
                <div className="videoBox">
                    {data.video.author && <img src={data.video.author.avatar[0].url} alt="Creator profile picture" />}
                    <div className="videoInfo">
                        <h2>{data.video.title}</h2>
                        {data.video.author && <h3>{data.video.author.title}</h3>}
                        <span>{data.video.stats.views} views &#8226; {data.video.publishedTimeText}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Video;