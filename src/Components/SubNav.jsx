import PropTypes from "prop-types";
import IconButton from "./IconButton";
import { BiSolidLeaf } from "react-icons/bi";
import BackBtn from "./BackBtn";

import { NavLink } from "react-router-dom";

const SubNav = ({ title }) => {
  return (
    <div className="w-full flex flex-row items-center justify-between h-12 z-50 fixed top-0 left-0 ">
      <div className="left flex flex-row ml-1">
        <NavLink to="/">
          <IconButton icon={BiSolidLeaf}></IconButton>
        </NavLink>
      </div>
      <div className="center text-sm">
        <h2>{title}</h2>
      </div>
      <div className="backBtn">
        <BackBtn />
      </div>
    </div>
  );
};
SubNav.propTypes = {
  title: PropTypes.string.isRequired, // The name of the button passed as a prop
};

export default SubNav;
