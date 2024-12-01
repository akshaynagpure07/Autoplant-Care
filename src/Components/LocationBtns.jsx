import PropTypes from "prop-types";
import IconButton from "./IconButton";

const LocationBtns = ({ functionality, icon }) => {
  return (
    <button className="flex flex-row justify-start text-left pl-4 items-center bg-green-200 opacity-80 border-none text-green-950 shadow-black shadow-sm h-16 w-80 rounded-xl ">
      <div className="btn-name text-lg w-64 pl-5 text-color-text  ">
        {functionality}
      </div>
      <div className="icon w-16 pr-6 text-dark-shade">
        <IconButton icon={icon} />
      </div>
    </button>
  );
};

// PropTypes validation
LocationBtns.propTypes = {
  functionality: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired, // Expecting an actual JSX element, not just a component type
};

LocationBtns.defaultProps = {
  icon: <div>No Icon</div>, // Default to a placeholder if no icon is passed
};

export default LocationBtns;
