import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const GroupButton = ({ items, width }) => {
  const [openGroupBtn, setOpenGroupBtn] = useState(false);
  const [selectedGroupBtn, setSelectedGroupBtn] = useState(items[0]);

  const handleGroupBtn = (item) => {
    setSelectedGroupBtn(item);
    setOpenGroupBtn(false);
  };
  const GroupBtnClassLg = (item, index) => {
    const classList = [];
    classList.push(selectedGroupBtn === item ? "groupBtn-active" : "");
    classList.push(index === 0 ? "groupBtn-right" : "");
    classList.push(index === items.length - 1 ? "groupBtn-left" : "");
    return classList.join(" , ");
  };

  const GroupBtnClassSm = (item, index) => {
    const classList = [];
    classList.push(index === items.length - 1 ? "border-0" : "");
    return classList.join(" , ");
  };

  return (
    <>
      <div className="groupBtn-lg">
        {items.map((item, index) => (
          <button
            key={item}
            type="button"
            className={`groupBtn ${GroupBtnClassLg(item, index)} ${width}`}
            onClick={() => handleGroupBtn(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="groupBtn-sm text-gray-500 mx-3">
        <button
          className="groupBtn-sm-btn"
          onClick={() => setOpenGroupBtn(!openGroupBtn)}
        >
          <span>{selectedGroupBtn}</span>
          <span>
            <FaAngleDown />
          </span>
        </button>
        <div
          className={`groupBtn-sm-div absolute w-[95%] left-0 right-0 mx-auto bg-white z-10 ${
            openGroupBtn ? "block" : "hidden"
          }`}
        >
          {items.map((item, index) => (
            <div
              key={item}
              className={`groupBtn-sm-item ${GroupBtnClassSm(item, index)}`}
              onClick={() => handleGroupBtn(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GroupButton;
