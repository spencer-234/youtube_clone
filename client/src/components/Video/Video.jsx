import "./video.scss";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Video = ({ data }) => {
    let vidLength = data.video.lengthSeconds;
    const vidHours = Math.floor(vidLength / 3600);
    vidLength %= 3600;
    const vidMinutes = String(Math.floor(vidLength / 60)).padStart(2, "0");
    const vidSeconds = String(vidLength % 60).padStart(2, "0");

    return (
        <div className="video">
            <Link to={`https://www.youtube.com/watch?v=${data.video.videoId}`}>
                <img src={data.video.thumbnails[0].url} alt="Video Thumbnail" className="thumbnail"/>
                <span className="time">
                    {vidHours === 0
                    ? `${vidMinutes}:${vidSeconds}`
                    : `${vidHours}:${vidMinutes}:${vidSeconds}`
                    }
                </span>
                <div className="videoBox">
                    {data.video.author
                    &&
                    <Link to={`https://www.youtube.com${data.video.author.canonicalBaseUrl}`}>
                        <img src={data.video.author.avatar[0].url} alt="Creator profile picture" />
                    </Link> 
                    }
                    <div className="videoInfo">
                        <h2>{data.video.title}</h2>
                        {data.video.author
                         &&
                         <Link to={`https://www.youtube.com${data.video.author.canonicalBaseUrl}`}>
                            <h3>{data.video.author.title}</h3>
                         </Link> 
                        }
                        <span>{data.video.stats.views} views &#8226; {data.video.publishedTimeText}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Video;