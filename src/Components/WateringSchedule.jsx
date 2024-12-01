import { GiWateringCan } from "react-icons/gi";
import { TbLineDotted } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import PropTypes from "prop-types";

function WateringSchedule({ startTime = "6:00 AM", endTime = "6:00 PM" }) {
  return (
    <div className="border-2 border-white bg-green-200 bg-opacity-80 shadow-md h-36 w-80 rounded-xl">
      <h1 className="heading text-xs p-2">Watering Schedule</h1>
      <div className="ketli w-80 flex justify-center text-3xl rotate-45">
        <GiWateringCan aria-label="Watering Can Icon" />
      </div>
      <div className="range flex flex-row justify-center items-center gap-3 -mt-4">
        <div className="initial text-sm font-semibold">{startTime}</div>
        <div className="cycle-icon text-xl items-center flex flex-row">
          <GoDotFill aria-label="Cycle Start" />
          <span className="text-6xl flex flex-row">
            <span className="-mr-1 -ml-2">
              <TbLineDotted aria-label="Dotted Line" />
            </span>
            <span className="-ml-1.5 -mr-2">
              <TbLineDotted aria-label="Dotted Line" />
            </span>
          </span>
          <GoDotFill aria-label="Cycle End" />
        </div>
        <div className="final-time text-sm font-semibold">{endTime}</div>
      </div>
      <div className="btn w-80 flex flex-row justify-center -mt-2">
        <button
          className="edit h-8 w-24 bg-black text-white shadow-md text-sm font-semibold rounded-lg hover:bg-blue-400"
          aria-label="Edit Schedule"
        >
          Edit Schedule
        </button>
      </div>
    </div>
  );
}

// PropTypes validation
WateringSchedule.propTypes = {
  startTime: PropTypes.string,
  endTime: PropTypes.string,
};

export default WateringSchedule;
