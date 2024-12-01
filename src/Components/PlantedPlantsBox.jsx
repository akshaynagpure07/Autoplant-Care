import PropTypes from "prop-types";
import IconButton from "./IconButton";
import { AiOutlineInfoCircle } from "react-icons/ai";

function PlantedPlantsBox({ plants = [] }) {
  return (
    <div className="border-2 border-white h-80 w-80 rounded-2xl shadow-md bg-green-200 bg-opacity-65 backdrop-blur-sm flex flex-col">
      <div className="top-section flex flex-row justify-between items-center p-1">
        <div className="heading pl-2">Planted Plants</div>
        <div className="i-btn">
          <IconButton
            icon={AiOutlineInfoCircle}
            aria-label="Information about planted plants"
          />
        </div>
      </div>

      <div className="plant-section w-full h-full flex flex-col items-center justify-evenly">
        {plants.length > 0 ? (
          plants.map((plant, index) => (
            <button
              key={index}
              className="plants-card border-2 border-white h-16 w-32 rounded-xl hover:bg-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" // Added focus styles
              aria-label={`View details about ${plant.name}`} // Improved accessibility
            >
              {plant.name}
            </button>
          ))
        ) : (
          <div className="text-center">No plants planted yet!</div> // Centered text for better alignment
        )}
        <button className="plants-card border-2 border-white h-16 w-32 rounded-xl hover:bg-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
          More
        </button>
      </div>
    </div>
  );
}

// Define PropTypes for the component
PlantedPlantsBox.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};

export default PlantedPlantsBox;
