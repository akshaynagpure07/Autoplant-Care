import { GraphBox, ScheduleBtn, LitreBox, SavingBox } from "../Components";
import { useState, useEffect } from "react";
import report from "../report.json";
import ScheduleBtns from "../Components/ScheduleBtn";

function Home() {
  const [waterUsageData, setWaterUsageData] = useState([]);
  const [moneySavingData, setMoneySavingData] = useState([]);

  const filterCategoryData = (categoryName) => {
    const category = report.categories.find((cat) => cat.name === categoryName);
    return category
      ? {
          waterRequired: category.waterRequired,
          moneySaves: category.moneySaves,
        }
      : { waterRequired: [], moneySaves: [] };
  };

  useEffect(() => {
    const { waterRequired } = filterCategoryData("Water Usage");
    const { moneySaves } = filterCategoryData("Money Savings");

    setWaterUsageData(waterRequired);
    setMoneySavingData(moneySaves);
  }, []);

  return (
    <div className="relative flex flex-col items-center overflow-x-hidden">
      {/* Main Content */}
      <div className="Graph  lg:w-11/12 lg:h-full">
        <GraphBox />
      </div>

      <h1 className="text-2xl font-medium flex flex-row w-full justify-start ml-16 mt-3 mb-2 text-dark-shade">
        Summary
      </h1>

      <div className="two-box flex flex-row items-center gap-7 mb-4 justify-center">
        <LitreBox waterRequired={waterUsageData} />
        <SavingBox moneySaves={moneySavingData} />
      </div>

      <div className="schedule flex flex-row justify-between gap-1 ">
      <ScheduleBtns />

      </div>
    </div>
  );
}

export default Home;
