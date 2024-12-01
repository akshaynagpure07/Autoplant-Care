import { useState } from "react";
import { SubNav, PlantInfo, MorePlants } from "../Components";
import SearchBar from "../Components/SearchBar";
import records from "../records.json"; // Import the JSON data

function PlantInfoPage() {
  const [selectedPlantId, setSelectedPlantId] = useState(1); // State for selected plant ID
  const [filteredRecords, setFilteredRecords] = useState(records); // Filtered records for search functionality

  // Search functionality
  const handleSearch = (query) => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      const filtered = records.filter((plant) =>
        plant.plantName.toLowerCase().includes(lowerQuery)
      );
      setFilteredRecords(filtered);
      if (filtered.length > 0) {
        setSelectedPlantId(filtered[0].id); // Update the selected plant to the first match
      }
    } else {
      setFilteredRecords(records); // Reset when the query is cleared
      setSelectedPlantId(records[0].id); // Reset selected plant to the default
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      
      <div className=" lg:w-full">
        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="plantInfoBox lg:w-full">
        {/* Display selected plant */}
        <PlantInfo selectedPlantId={selectedPlantId} />
      </div>
      <div>
        {/* Carousel remains unaffected */}
        <MorePlants setSelectedPlantId={setSelectedPlantId} />
      </div>
    </div>
  );
}

export default PlantInfoPage;
