import PropTypes from "prop-types";
import records from "../records.json";

function PlantCarousel({ setSelectedPlantId }) {
  return (
    <div className="container mx-auto my-8">
      <div className="flex overflow-x-auto space-x-6 py-4 scrollbar-hide">
        {records.map((record) => (
          <div
            key={record.id}
            onClick={() => setSelectedPlantId(record.id)}
            className="carousel-item cursor-pointer w-40 h-40 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-500"
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-gray-300 hover:border-blue-600">
              <img
                src={record.image}
                alt={record.plantName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-center p-2 rounded-b-lg">
                <h3 className="font-semibold text-sm">{record.plantName}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

PlantCarousel.propTypes = {
  setSelectedPlantId: PropTypes.func.isRequired, // Validate the prop type
};

export default PlantCarousel;
