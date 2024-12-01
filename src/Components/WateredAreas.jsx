import { FaFilter } from "react-icons/fa6";

function WateredAreas() {
  return (
    <div className="main flex flex-col items-center  w-80 ">
      <div className="heading-row flex flex-row justify-between w-80  mt-12 -mb-10 px-2">
        <div className="heading text-xs font-semibold text-black">
          Watering Status
        </div>
        <div className="option-icon text-black" aria-label="Filter Options">
          <FaFilter />
        </div>
      </div>
      <div className="main text-white flex flex-col items-center justify-center gap-3 rounded-2xl bg-black bg-opacity-65 backdrop-blur-sm border-white border-2 h-96 w-80 m-12"></div>
    </div>
  );
}

// PropTypes validation

export default WateredAreas;
