import PropTypes from "prop-types";
import records from "../records.json";

function PlantInfo({ selectedPlantId }) {
  const selectedPlant = records.find((record) => record.id === selectedPlantId);

  return (
    <>
      {selectedPlant ? (
        <div
          key={selectedPlant.PlantName}
          className="Main-graph flex flex-col border-white border-2 bg-opacity-35 backdrop-blur-sm shadow-md w-80 lg:w-11/12 lg:flex-wrap lg:flex-row lg:gap-8 lg:leading-10 lg justify-start px-4 pt-3 rounded-2xl bg-green-300 pb-3"
        >
          <div className="image border-black border-2 w-72 lg:w-5/12 lg:min-h-96 h-28 rounded-lg flex items-center justify-center">
            {selectedPlant.image ? (
              <img
                src={selectedPlant.image}
                alt={selectedPlant.PlantName}
                className="w-full h-full rounded-lg object-cover"
              />
            ) : (
              <span className="text-3xl">No Image</span>
            )}
          </div>
          <div className="name-details lg:text-2xl">
            <h1 className="name font-extrabold text-md mt-2 -mb-2">
              Plant Name:{" "}
              <span className="font-semibold text-sm lg:text-2xl">
                {selectedPlant.plantName}
              </span>
            </h1>
            <i className="sci-name text-xs lg:text-sm">
              Scientific Name: {selectedPlant.scientificName}
            </i>
            <div className="details">
              <h1 className="benefits font-bold text-sm mb-1 lg:text-2xl">
                Benefits:
              </h1>
              <ul>
                {selectedPlant.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm lg:text-xl">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="water-related">
              <h1 className="cycle font-bold text-sm lg:text-2xl">
                Watering Cycle:{" "}
                <span className="font-medium text-sm lg:text-xl">
                  {selectedPlant.wateringCycle}
                </span>
              </h1>
              <h1 className="water-require font-bold text-sm lg:text-2xl">
                Water Required:{" "}
                <span className="font-medium text-sm lg:text-xl">
                  {selectedPlant.waterRequired}
                </span>
              </h1>
              <h1 className="km-based-plants font-bold text-sm lg:text-2xl">
                Plants for 1 km Divider:{" "}
                <span className="font-medium text-sm lg:text-xl">
                  {selectedPlant.plantsFor1kmDivider}
                </span>
              </h1>
              <h1 className="description font-bold text-smlg:text-2xl">
                Description: <br />{" "}
                <span className="font-medium text-sm lg:text-xl">
                  {selectedPlant.description}
                </span>
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <p>Select a plant to view details.</p>
      )}
    </>
  );
}

PlantInfo.propTypes = {
  selectedPlantId: PropTypes.number, // Validate the prop type
};

export default PlantInfo;
