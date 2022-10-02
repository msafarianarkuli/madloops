import React from "react";
import { Button } from "./../button-component/button.component";
import starFill from "../../../Assets/star-fill.svg";
import { HiOutlineUser, HiOutlineUsers } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const CardAI = ({ item }) => {
  const handleLead = (value) => {
    const trimmedLead =
      value
        .substring(0, 120)
        .substring(0, value.substring(0, 120).lastIndexOf(" ")) + "...";
    return trimmedLead;
  };

  const navigate = useNavigate();

  return (
    <div className="border-gray-500 text-gray-500 border-2 hover:border-lite-purple hover:custom-shadow rounded-lg p-3 flex flex-col group">
      <div className="w-full h-60">
        <img src={item.image} className="rounded-md w-full h-full" alt="" />
      </div>
      <p className="text-right text-xs font-bold text-blue-600 mt-4 mb-2">
        {item.archive ? "آرشیو شده" : "آرشیو نشده"}
      </p>
      <div>
        <p className="text-right text-xl mb-3 text-gray-900">{item.title}</p>
        <p className="text-gray-500 text-sm mb-3 text-right">
          {handleLead(item.description)}
        </p>
        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <HiOutlineUser size="20px" className="ml-3" />
            <span>{item.teacher}</span>
          </div>
          <div className="flex">
            <img className="ml-3" src={starFill} alt="" />
            <span>{item.likeCount}</span>
          </div>
        </div>

        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <HiOutlineUsers size="20px" className="ml-3" />
            <span>50</span>
          </div>
          <span>{item.price} ریال</span>
        </div>
        <Button
          onClick={() => navigate(`courses/${item.id}`)}
          ButtonType="button"
          classButton="btn btn-base w-full group-hover:border-lite-purple"
        >
          جزئیات دوره
        </Button>
      </div>
    </div>
  );
};

export default CardAI;
