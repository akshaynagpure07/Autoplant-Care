import { useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios
import Linechart from "./Linecharts";
import Barchart from "./Barchart";
import { RiRefreshLine } from "react-icons/ri";


function GraphBox() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false); // Initialize with false

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios('https://nodewater.whf.bz/json.php?apikey=LIFQpwnVeyZ84Yvxk9OPDAaXV9PsbIGc&view=true');
        setData(res.data); // Use setData instead of setGraphData
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [refresh]);

  const refreshData = () => {
    setRefresh(prev => !prev); // Toggle the refresh state
  };

  return (
    <div className="Main-graph border-2 border-Border-corner flex flex-col bg-opacity-35  shadow-gray-700 shadow-sm h-auto w-80 lg:h-5/6 lg:w-full lg:flex-wrap-reverse lg:flex-row-reverse lg:bg-none lg:items-center lg:justify-center justify-center items-center rounded-2xl bg-card-bg">
      <div className="compare flex flex-col justify-center text-sm p-2 lg:w-2/4">
        Comparative Consumption
        <div className="line-graph h-40 lg:h-96 w-72 lg:w-11/12 bg-gray-100 p-2 pb-0 pt-2 rounded-lg overflow-hidden relative">
  <Linechart />
</div>

      </div>
      <div className="flex flex-col justify-center text-sm mt-2 mb-4 lg:w-2/4">
        Water Used
        <div className="line-graph h-40 lg:h-96 w-72 lg:w-11/12 bg-gray-100  rounded-lg overflow-hidden relative">
          {/* Placeholder for bar graph */}
          <Barchart />
        </div>
      </div>
      <button onClick={refreshData} className=" p-2 text-2xl  border-2 border-gray-200 shadow-sm shadow-gray-500 mb-1 text-color-text rounded-full bg-white">
      <RiRefreshLine/>
      </button>
    </div>
  );
}

export default GraphBox;