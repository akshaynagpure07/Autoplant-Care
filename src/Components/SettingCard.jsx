import PropTypes from "prop-types";
import { IoLanguage } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

function SettingCard({ language = "English", onLoginClick }) {
  return (
    <div className="main flex flex-col items-start px-5 py-3 justify-start gap-3 rounded-2xl bg-black bg-opacity-65 backdrop-blur-sm border-white border-2 h-96 w-80">
      <div className="heading font-bold text-white text-xl font-sans">
        Settings
      </div>
      <div className="sub-heading flex flex-col items-start text-white text-sm font-bold pl-2">
        <div className="sub-heading-1 flex flex-row items-center justify-center gap-2">
          <IoLanguage aria-label={`Language: ${language}`} />
          <span>{language}</span>
        </div>
        <div className="sub-heading-2 flex flex-row items-center justify-between gap-2">
          <HiUserCircle aria-label="User Profile" />
          <Link to="/userLoginPage">
            <button
              onClick={onLoginClick}
              className="  hover:text-blue-200"
              aria-label="Login to your account"
            >
              User Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Define PropTypes for the component
SettingCard.propTypes = {
  language: PropTypes.string, // Language setting
  onLoginClick: PropTypes.func.isRequired, // Function to handle login click
};

export default SettingCard;
