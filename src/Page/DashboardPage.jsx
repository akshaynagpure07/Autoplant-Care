// import LocationBtns from "./LocationBtns"

import { LocationsMap, LocationBtns, SubNav } from "../Components";

import { FaArrowRight } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { MdSignalCellularAlt } from "react-icons/md";

const DashboardPage = () => {
  // const data="Watered Areas";

  return (
    <div className=" flex flex-col items-center justify-center">
      
      <div className="btns flex flex-col gap-6">
        <div className="map mt-12 -mb-3 ">
          <LocationsMap />
        </div>

        <LocationBtns functionality="Watered Plants" icon={FaArrowRight} />
        <LocationBtns functionality="Irrigation Preference" icon={FiSettings} />
        <LocationBtns
          functionality="Track Plant Health"
          icon={MdSignalCellularAlt}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
