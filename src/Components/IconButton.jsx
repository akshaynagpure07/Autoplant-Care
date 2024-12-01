import PropTypes from "prop-types"; // Import PropTypes for type checking

const IconButton = ({ icon: Icon, label }) => {
  return (
    <button className="flex items-center p-1 bg-none text-black rounded text-3xl">
      {/* Render the icon passed via props */}
      <Icon className="text-xl lg:text-3xl" />
      {label}
    </button>
  );
};

// PropTypes for type checking
IconButton.propTypes = {
  icon: PropTypes.elementType.isRequired, // The icon is expected to be a React component
  label: PropTypes.string, // Label is optional but recommended
};

export default IconButton;
