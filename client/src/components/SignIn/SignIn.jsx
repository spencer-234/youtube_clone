import "./signin.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const SignIn = () => {
    return (
        <div className="signIn">
          <AccountCircleOutlinedIcon className="account"/>
          <span>Sign In</span>
        </div>
    )
}

export default SignIn;