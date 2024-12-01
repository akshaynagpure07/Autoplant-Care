import { PlantedPlantsBox } from "../Components";
import SubNav from "./SubNav";

function Irrigation() {
  const lastWateredDate = "2024-09-25"; // Replace with dynamic data as needed

  return (
    <div className="main flex flex-col items-center justify-center mt-20">
      <SubNav title="Irrigation" />
      <div className="flex flex-col items-center">
        <p className="last-watered text-xs font-semibold mb-7">
          Last Watered: {lastWateredDate}
        </p>
        <PlantedPlantsBox />
      </div>
    </div>
  );
}

export default Irrigation;
