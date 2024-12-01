import PropTypes from "prop-types";

const LitreBox = ({ waterRequired }) => {
  // Ensure litres is an array and handle potential undefined or null values
  if (!Array.isArray(waterRequired) || waterRequired.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex flex-wrap gap-3 ">
      {waterRequired.map((card) => (
        <div key={card.id} className="w-1/2 p-1 ">
          <div className="saving bg-card-bg flex flex-col justify-center border-none border-black w-36 lg:w-64 lg:h-44 h-24 rounded-2xl bg-opacity-35  shadow-black shadow-sm">
            <div className="saving-heading pl-2 lg:ml-4">
              <div className="saving-money text-xl ml-2 text-color-text lg:text-3xl lg:font-base">
                Total Usage
              </div>
              <div className="price text-2xl font-bold ml-2 text-color-text lg:text-4xl lg:font-bold">
                {card.waterRequired}L
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// PropTypes validation
LitreBox.propTypes = {
  waterRequired: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      waterRequired: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LitreBox;
