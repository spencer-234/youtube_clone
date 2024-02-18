import "./sidebar.scss";

// import icons for navbar items
import HomeIcon from '@mui/icons-material/Home';
import ShortsIcon from "../../assets/Youtube_shorts_icon.png";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Shop2Icon from '@mui/icons-material/Shop2';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SensorsIcon from '@mui/icons-material/Sensors';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import YoutubeKids from "../../assets/youtube_kids.png";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// import Sign in component for sidebar
import SignIn from "../SignIn/SignIn.jsx";

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <section className="partialSidebar">
                <ul>
                    <li className="selected">
                        <HomeIcon className="icon"/>
                        Home
                    </li>
                    <li>
                        <img src={ShortsIcon} alt="shorts icon" className="icon"/>
                        Shorts
                    </li>
                    <li className="postButton">
                        <AddCircleOutlineIcon className="addIcon" />
                    </li>
                    <li>
                        <RecentActorsIcon className="icon" />
                        Subscriptions
                    </li>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        You
                    </li>
                </ul>
            </section>
            <section className="fullSidebar">
                <ul>
                    <li>
                        <VideoLibraryIcon className="icon" />
                        You
                    </li>
                    <li>
                        <HistoryIcon className="icon" />
                        History
                    </li>
                </ul>
            </section>
            <section className="signInSection fullSidebar">
                <span>Sign in to like videos,<br />comment, and subscribe.</span>
                <SignIn />
            </section>
            <section className="fullSidebar">
                <h2>Explore</h2>
                <ul>
                    <li>
                        <WhatshotIcon className="icon"/>
                        Trending
                    </li>
                    <li>
                        <Shop2Icon className="icon" />
                        Shopping
                    </li>
                    <li>
                        <MusicNoteIcon className="icon" />
                        Music
                    </li>
                    <li>
                        <LiveTvIcon className="icon" />
                        Movies & TV
                    </li>
                    <li>
                        <SensorsIcon className="icon" />
                        Live
                    </li>
                    <li>
                        <SportsEsportsOutlinedIcon className="icon"/>
                        Gaming
                    </li>
                    <li>
                        <FeedOutlinedIcon className="icon" />
                        News
                    </li>
                    <li>
                        <EmojiEventsOutlinedIcon className="icon" />
                        Sports
                    </li>
                    <li>
                        <LightbulbOutlinedIcon className="icon" />
                        Learning
                    </li>
                    <li>
                        <AutoAwesomeOutlinedIcon className="icon"/>
                        Fashion & Beauty
                    </li>
                    <li>
                        <PodcastsIcon className="icon" />
                        Podcasts
                    </li>
                </ul>
            </section>
            <section className="fullSidebar">
                <ul>
                    <li>
                        <AddCircleOutlineOutlinedIcon className="icon" />
                        Browse channels
                    </li>
                </ul>
            </section>
            <section className="fullSidebar">
                <h2>More from YouTube</h2>
                <ul>
                   <li>
                        <YouTubeIcon className="icon more" />
                        YouTube Premium
                    </li>
                   <li>
                        <OndemandVideoIcon className="icon more" />
                        YouTube TV
                    </li>
                   <li>
                        <PlayCircleIcon className="icon more" />
                        YouTube Music
                    </li>
                   <li>
                        <img src={YoutubeKids} alt="Youtube kids icon" className="youtubeKids"/>
                        YouTube Kids
                    </li> 
                </ul>
            </section>
            <section className="fullSidebar">
                <ul>
                    <li>
                        <SettingsOutlinedIcon className="icon" />
                        Settings
                    </li>
                    <li>
                        <FlagOutlinedIcon className="icon" />
                        Report history
                    </li>
                    <li>
                        <HelpOutlineOutlinedIcon className="icon" />
                        Help
                    </li>
                    <li>
                        <AnnouncementOutlinedIcon className="icon" />
                        Send feedback
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Sidebar;