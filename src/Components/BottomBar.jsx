import IconButton from "./IconButton";
import { FaHome } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";
import { FiSettings } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function BottomBar() {
  return (
    <div className=" absolute left-0 right-0 bottom-0">
      <div className="bottom-bar bg-green-300 flex flex-row items-center justify-around px-11 py-5 rounded-tr-xl rounded-tl-xl w-full fixed left-0 bottom-0 z-[1000]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-card-bg rounded-full p-2" : "active-link"
          }
        >
          <IconButton icon={FaHome} aria-label="Home Icon" />
        </NavLink>
        <NavLink
          to="/dashBoardPage"
          className={({ isActive }) =>
            isActive ? "bg-card-bg rounded-full p-2" : "active-link"
          }
        >
          <IconButton icon={FaDroplet} aria-label="Drop Icon" />
        </NavLink>
        <NavLink
          to="/plantInfoPage"
          className={({ isActive }) =>
            isActive ? "bg-card-bg rounded-full p-2" : "active-link"
          }
        >
          <IconButton icon={SlGraph} aria-label="Graph Icon" />
        </NavLink>
        <NavLink
          to="/settingPage"
          className={({ isActive }) =>
            isActive ? "bg-card-bg rounded-full p-2" : "active-link"
          }
        >
          <IconButton icon={FiSettings} aria-label="Setting Icon" />
        </NavLink>
      </div>
    </div>
  );
}

export default BottomBar;
