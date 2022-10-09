import React, { useState } from "react";
import { FieldName } from "../../common/field-name-component/field-name.component";
import {
  BsInstagram,
  BsTelegram,
  BsLinkedin,
  BsWhatsapp,
  BsFacebook,
  BsDashLg,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useParams } from "react-router-dom";
import { getTeacher } from "../../../Core/services/Fake Service/Teacher";
import Data from "./../../../Core/services/Fake Service/Teacher";

const TeacherPage = () => {
  const { teachers } = Data;
  const { id } = useParams();
  const [teacherItem] = useState(getTeacher(Number(id)));

  return (
    <div className="container m-auto">
      <div className="flex 2xl:flex-row flex-col-reverse justify-between">
        <div className="2xl:w-[50%] w-full pr-16">
          <div className="h-16 sm:mt-20 mt-4 mb-1 text-right">
            <FieldName
              showH2
              title={teacherItem.title}
              classH2Field="sm:text-3xl text-xl"
            />
          </div>
          <div className="w-500 h-fit text-right">
            <FieldName
              showP
              field={teacherItem.description}
              classPfield="sm:text-xl text-md pt-3 text-gray-400 break-all"
            />
          </div>

          <div className="flex h-16 sm:mt-20 mt-4 mb-1 text-right">
            <div className="bg-gray-200 ml-4 h-fit w-fit rounded-lg sm:mt-0 mt-2">
              <SiGmail className="sm:text-6xl text-4xl p-2" />
            </div>
            <FieldName
              showH2
              title={`ایمیل: ${teacherItem.gmail}`}
              classH2Field="sm:text-3xl text-base pt-3 text-gray-500"
            />
          </div>
          <div className="flex flex-col justify-center md:flex-row md:justify-around md:gap-0 gap-10 text-center mt-16">
            <div className="bg-[#F6F6FB] w-52 h-40 rounded-sm md:mx-0 mx-auto">
              <div className="text-[#C53F3F] text-4xl mt-6">
                {teachers.reduce((a, b) => a + b.lesson, 0)}+
              </div>
              <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
              <div className="text-[#675F74] text-3xl">درس </div>
            </div>
            <div className="bg-[#F6F6FB] w-52 h-40 rounded-sm md:mx-0 mx-auto">
              <div className="text-[#C53F3F] text-4xl mt-6">
                {teachers.reduce((a, b) => a + b.hour, 0)}+
              </div>
              <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
              <div className="text-[#675F74] text-3xl">ساعت </div>
            </div>
            <div className="bg-[#F6F6FB] w-52 h-40 rounded-sm md:mx-0 mx-auto">
              <div className="text-[#C53F3F] text-4xl mt-6">
                {teachers.length}+
              </div>
              <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
              <div className="text-[#675F74] text-3xl">دوره </div>
            </div>
          </div>
        </div>
        <div className="2xl:w-[50%] w-full 2xl:h-800 xl:h-600 lg:h-500 md:h-300 sm:h-200 h-100">
          <div className="relative">
            <div className="absolute lg:top-16 sm:top-8 2xl:inset-x-[302px] xl:inset-x-[450px] lg:inset-x-80 md:inset-x-60 sm:inset-x-60 inset-x-36 2xl:w-9/12 xl:w-4/12 lg:w-5/12 md:w-4/12 sm:w-3/12 w-2/12 h-9/12 bg-gray-200 rounded-full z-10">
              <img
                src={teacherItem.img}
                className="rounded-full w-full h-full 2xl:p-28 lg:p-20 md:p-10 sm:p-8 p-3"
                alt="bahr"
              />
              <div className="absolute 2xl:top-7 2xl:left-64 lg:top-6 lg:left-[198px] md:top-3 md:left-[120px] sm:top-2 sm:left-[73px] top-0.5 left-[25px]">
                <BsLinkedin className="2xl:text-6xl lg:text-4xl md:text-xl sm:text-base text-[7px] text-blue-500" />
              </div>
              <div className="absolute 2xl:top-[102px] 2xl:left-[420px] lg:top-20 lg:left-[320px] md:top-[45px] md:left-[195px] sm:top-[27px] sm:left-[117px] top-[9px] left-[41px]">
                <BsFacebook className="2xl:text-6xl lg:text-4xl md:text-xl sm:text-base text-[7px] text-blue-900" />
              </div>
              <div className="absolute 2xl:top-64 2xl:left-[480px] lg:top-[200px] lg:left-[370px] md:top-[120px] md:left-[222px] sm:top-[75px] sm:left-[134px] top-[25px] left-[48px]">
                <BsInstagram className="2xl:text-6xl lg:text-4xl md:text-xl sm:text-base text-[7px] text-lite-purple" />
              </div>
              <div className="absolute 2xl:bottom-[102px] 2xl:left-[420px] lg:bottom-20 lg:left-[320px] md:bottom-[45px] md:left-[195px] sm:bottom-[27px] sm:left-[117px] bottom-[9px] left-[41px]">
                <BsTelegram className="2xl:text-6xl lg:text-4xl md:text-xl sm:text-base text-[7px] text-blue-600" />
              </div>
              <div className="absolute 2xl:bottom-7 2xl:left-64 lg:bottom-6 lg:left-[198px] md:bottom-3 md:left-[120px] sm:bottom-2 sm:left-[73px] bottom-0.5 left-[25px]">
                <BsWhatsapp className="2xl:text-6xl lg:text-4xl md:text-xl sm:text-base text-[7px] text-green-600" />
              </div>
            </div>

            <div className="absolute 2xl:top-10 2xl:left-64 xl:top-14 xl:left-[700px] lg:top-16 lg:left-[590px] md:top-6 md:left-[450px] sm:top-5 sm:left-[340px] top-0 left-[185px] z-0">
              <img
                src={require("../../../Assets/Ellipse 4.svg").default}
                className="2xl:w-28 xl:w-24 lg:w-20 md:w-16 sm:w-12 w-4"
              />
            </div>
            <div className="absolute 2xl:top-[276px] 2xl:left-[360px] xl:top-[390px] xl:left-[600px] lg:top-[400px] lg:left-[500px] md:top-[230px] md:left-[395px] sm:top-[150px] sm:left-[310px] top-[40px] left-[170px]">
              <img
                src={require("../../../Assets/Ellipse 3.svg").default}
                className="2xl:w-44 xl:w-40 lg:w-32 md:w-24 sm:w-16 w-8"
              />
            </div>
            <div className="absolute 2xl:top-[570px] 2xl:left-[250px] xl:top-[330px] xl:left-[380px] lg:top-[330px] lg:left-[260px] md:top-[200px] md:left-[260px] sm:top-[140px] sm:left-[235px] top-[40px] left-[146px]">
              <img
                src={require("../../../Assets/Ellipse 5.svg").default}
                className="2xl:w-24 xl:w-20 lg:w-16 md:w-12 sm:w-8 w-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
