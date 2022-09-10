import React from "react";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";

const GridAndList = ({ showGrid, setShowGrid }) => {
  return (
    <div className="m-auto rounded-[20px] sm:flex items-stretch transition ease-in-out duration-200 hidden">
      <BsListUl
        className={
          !showGrid
            ? "lg:text-7xl md:text-6xl sm:text-5xl p-3 text-[#373F49] cursor-pointer border-[#5DC8B2] border-y-2 border-r-2 rounded-r-[20px] transition ease-in-out duration-200 hover:bg-[#5DC8B2] hover:rounded-r-[20px] hover:text-white"
            : "lg:text-7xl md:text-6xl sm:text-5xl p-3 text-white cursor-pointer bg-[#5DC8B2]  rounded-r-[20px]"
        }
        onClick={() => {
          setShowGrid(true);
          console.log("switched to grid");
        }}
      />
      <BsFillGrid3X3GapFill
        className={
          showGrid
            ? "lg:text-7xl md:text-6xl sm:text-5xl p-3 cursor-pointer border-[#5DC8B2] border-y-2 border-l-2 rounded-l-[20px] text-[#373F49] hover:rounded-l-[20px] transition ease-in-out duration-200 hover:bg-[#5DC8B2] hover:text-white"
            : "lg:text-7xl md:text-6xl sm:text-5xl p-3 cursor-pointer bg-[#5DC8B2] rounded-l-[20px] text-white"
        }
        onClick={() => {
          setShowGrid(false);
          console.log("switched to list");
        }}
      />
    </div>
  );
};

export default GridAndList;
