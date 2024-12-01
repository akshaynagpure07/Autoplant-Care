import PropTypes from "prop-types";

const SavingBox = ({ moneySaves }) => {
  // Ensure moneySaves is an array and handle potential undefined or null values
  if (!Array.isArray(moneySaves) || moneySaves.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="w-36">
      {moneySaves.map((card) => (
        <div
          key={card.id}
          className="saving bg-card-bg flex flex-col justify-center border-none border-black rounded-2xl bg-opacity-35  shadow-black shadow-sm h-24 lg:w-full lg:h-96"
        >
          <div className="saving-heading pl-2 lg:ml-4">
            <h2 className="saving-money text-xl ml-2 text-color-text lg:text-3xl lg:font-base">
              Total Savings
            </h2>
            <p className="price text-2xl font-bold ml-2 text-color-text lg:text-4xl">
              ${card.moneySaves.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

// PropTypes validation
SavingBox.propTypes = {
  moneySaves: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      moneySaves: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SavingBox;
