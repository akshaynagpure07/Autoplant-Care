import { FaArrowRight } from "react-icons/fa6";
import PlantCarousel from "./PlantCarousel";

function MorePlants({ setSelectedPlantId, filteredRecords }) {
  return (
    <div className="more-plants-container pl">
      <h2 className="pl-4 py-1 flex flex-row items-center font-base text-lg">
        More Plants
        <span className="-mb-1 pl-1">
          <FaArrowRight />
        </span>
      </h2>
      <div className="border-2 border-black w-80 h-48 rounded-xl flex justify-center items-center">
        <PlantCarousel
          setSelectedPlantId={setSelectedPlantId}
          filteredRecords={filteredRecords}
        />
      </div>
    </div>
  );
}

export default MorePlants;
