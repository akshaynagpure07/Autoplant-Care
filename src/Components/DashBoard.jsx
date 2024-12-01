import { LocationsMap, LocationBtns } from "../Components";
import { FaArrowRight } from "react-icons/fa6";
import { FiSettings, FiBarChart } from "react-icons/fi";

function DashBoard() {
  return (
    <div className="flex flex-col justify-between items-center gap-5 p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="pt-3 text-2xl font-bold">Plant Care Dashboard</h1>
      <LocationsMap />
      <div className="flex flex-col gap-2 w-full">
        <LocationBtns functionality="Watered Areas" icon={FaArrowRight} />
        <LocationBtns functionality="Irrigation Preference" icon={FiSettings} />
        <LocationBtns functionality="Track Plant Health" icon={FiBarChart} />
      </div>
    </div>
  );
}

export default DashBoard;
