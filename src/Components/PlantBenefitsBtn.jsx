import PropTypes from "prop-types";

function PlantBenefitsBtn({ text }) {
  return (
    <div
      className="border-2 border-black rounded-md bg-black text-white text-xs flex items-center justify-center w-28 py-0.5 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" // Added focus styles
      aria-label={text} // For accessibility
    >
      {/* {benefits.map((benefit, index) => (
        <button key={index}>{benefit}</button>
      ))} */}
    </div>
  );
}

// Define PropTypes for the component
PlantBenefitsBtn.propTypes = {
  text: PropTypes.string,
};

export default PlantBenefitsBtn;
