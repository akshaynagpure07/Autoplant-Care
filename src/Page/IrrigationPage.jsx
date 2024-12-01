import { SubNav, PlantedPlantsBox } from "../Components";

function IrrigationPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      
      <h3 className="date mt-12 text-xs text-left w-full ml-11 font-semibold">
        Last Watered: 21 Sept 6:03 AM
      </h3>
      <div className="box mt-9 ">
        <PlantedPlantsBox />
      </div>
    </div>
  );
}

export default IrrigationPage;
