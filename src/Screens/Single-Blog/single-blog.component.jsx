import { useState } from "react";
import { useParams } from "react-router-dom";
import { FieldName } from "../../Components/common/field-name-component/field-name.component";
import { FiClock } from "react-icons/fi";
import { Button } from "../../Components/common/button-component/button.component";
import CustomTab from "../../Components/common/tabs/CustomTab";
import commentData from "../../Core/services/Fake Service/CourseComments";
import tabData from "../../Core/services/Fake Service/BlogTabList";
import { getBlog } from "../../Core/services/Fake Service/Blogs";
import Data from "./../../Core/services/Fake Service/Blogs";
import { handleDateSortingDes } from "../../Core/utils/sorting";

const SingleBlog = () => {
  const { blogs } = Data;
  const [suggestions] = useState(handleDateSortingDes(blogs));
  const { id } = useParams();
  const [blogItem] = useState(getBlog(Number(id)));

  const handleLead = (value) => {
    const trimmedLead =
      value
        .substring(0, 60)
        .substring(0, value.substring(0, 60).lastIndexOf(" ")) + "...";
    return trimmedLead;
  };

  return (
    <div className="container m-auto">
      <div className="grid 2xl:grid-cols-8 xl:grid-cols-12 lg:grid-cols-8 md:grid-cols-12 sm:grid-cols-12 grid-cols-12 mt-5">
        <div className="2xl:col-span-5 xl:col-span-8 lg:col-span-7 md:col-span-12 sm:col-span-12 col-span-12">
          <div className="2xl:w-10/12 xl:w-11/12 lg:w-10/12 md:w-full sm:w-full w-full lg:float-left ml-5 rounded-xl bg-lite-white custom-shadow mb-10">
            <div className="sm:h-96 h-64">
              <img
                className="rounded-t-xl w-full sm:h-96 h-64"
                src={blogItem.image}
                alt="react-hooks"
              />
            </div>
            <div className="h-16">
              <div className="flex justify-center">
                <FieldName
                  showH2
                  title={blogItem.title}
                  classH2Field="text-3xl pt-3"
                />
              </div>
            </div>
            <div className="h-72">
              <div className="w-10/12 m-auto">
                <FieldName
                  showP
                  field={blogItem.description}
                  classPfield="m-auto sm:text-xl text-md pt-3 text-gray-400"
                />
              </div>
            </div>
            <div className="h-16 sm:my-5 my-32 ">
              <div className="w-11/12 m-auto grid grid-cols-10 border-2 border-deep-purple rounded-xl">
                <div className="sm:col-span-3 col-span-10 flex justify-between sm:border-none border-deep-purple border-b-2">
                  <span className="">
                    <img
                      className="w-10 m-2 sm:mr-5 mr-20"
                      src={require("../../Assets/img/profile.png")}
                      alt="profile"
                    />
                  </span>
                  <h2 className="2xl:text-lg xl:text-md md:ml-10 sm:ml-5 ml-24 mt-4">
                    {blogItem.people}
                  </h2>
                </div>
                <div className="sm:col-span-5 col-span-10 flex justify-between sm:border-r-2 sm:border-b-0 border-b-2 border-deep-purple">
                  <div className="mt-4 sm:mb-0 mb-4 mr-3 2xl:text-lg xl:text-md">
                    آیا این مطلب براتون مفید بود ؟
                  </div>
                  <div className="">a</div>
                </div>
                <div className="sm:col-span-2 col-span-10 flex justify-between sm:border-r-2 border-b-none border-deep-purple">
                  <FiClock className="mt-5 md:mr-5 sm:mr-2 mr-24 text-lg text-gray-600" />
                  <span className="mt-4 sm:mb-0 mb-4 md:ml-4 sm:ml-2 ml-28 text-gray-600 2xl:text-lg xl:text-md">
                    {blogItem.date}
                  </span>
                </div>
              </div>
            </div>
            <div className="my-10 pb-5">
              <CustomTab commentData={commentData} tabData={tabData} />
            </div>
          </div>
        </div>
        <div className="2xl:col-span-3 xl:col-span-4 lg:col-span-8 md:col-span-12 sm:col-span-12 col-span-12 mb-10">
          <div className="2xl:w-9/12 xl:w-11/12 lg:w-8/12 md:w-10/12 sm:w-11/12 w-full h-800 xl:mr-0 lg:mr-40 md:mr-16 sm:mr-6 mr-0 bg-lite-white custom-shadow rounded-xl">
            <div className="h-16 flex justify-center">
              <h2 className="text-3xl mt-5">اخبار پیشنهادی</h2>
            </div>
            <div className="overflow-y-scroll ml-1 p-1 pr-0 faq-container h-650">
              {suggestions.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="sm:h-36 h-32 w-11/12 mb-5 grid grid-cols-5 rounded-2xl hover:cursor-pointer hover:-translate-x-4 hover:custom-shadow duration-300 group"
                  >
                    <div className="col-span-2 overflow-hidden">
                      <img
                        className="w-full h-full duration-300 rounded-l-2xl group-hover:rounded-r-2xl group-hover:rounded-l-sm"
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="col-span-3">
                      <FieldName
                        showH2
                        showP
                        title={handleLead(item.title)}
                        classH2Field="sm:text-2xl text-xl pt-3 mr-5 text-gray-700"
                      />
                      <p className="mr-3 sm:text-lg text-md sm:w-48 md:w-72 lg:w-80 xl:w-48 w-44 text-gray-400">
                        {handleLead(item.description)}
                      </p>
                      <div className="col-span-2 w-36 flex justify-between">
                        <FiClock className="mt-3 mr-5 sm:text-lg text-md text-gray-600" />
                        <span className="mt-2 sm:ml-4 ml-8 text-gray-600 sm:text-lg text-md">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="h-20 flex justify-center">
              <Button
                classButton="btn w-50 border-b-0 rounded-b-none border-deep-purple duration-300 ease-in-out 
                    text-deep-purple pt-1 pb-3 px-10 text-xl hover:-translate-y-1 mt-10"
              >
                مشاهده عناوین بیشتر
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
