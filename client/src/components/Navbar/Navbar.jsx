import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/Youtube_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoOptions">
        <div className="menuIcon">
          <MenuIcon className="menuButton" />
        </div>
        <div className="logo">
          <img src={Logo} alt="YouTube Logo" />
          <h1>YouTube</h1>
        </div>
      </div>
      <div className="searchOptions">
        <div className="searchBar">
          <SearchIcon className="displayOnClick"/>
          <input type="text" placeholder="Search" />
          <SearchIcon className="searchIcon"/>
        </div>
        <MicIcon className="microphone"/>
      </div>
      <div className="userOptions">
        <MoreVertIcon className="more"/>
        <div className="signIn">
          <AccountCircleOutlinedIcon className="account"/>
          <span>Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
