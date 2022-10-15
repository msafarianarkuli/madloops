import React from "react";
import { Card } from "./Card/card.component";
import { Button } from "./button-component/button.component";
import { useNavigate } from "react-router-dom";
import {
  BsFillStarFill,
  BsStar,
  BsPerson,
  BsPeople,
  BsFillCircleFill,
  BsClock,
  BsEye,
  BsFillBookmarkPlusFill,
  BsFillShareFill,
} from "react-icons/bs";
import { Fragment } from "react";

const CardGridListView = ({ item, view }) => {
  const handleLead = (value) => {
    const trimmedLead =
      value
        .substring(0, 120)
        .substring(0, value.substring(0, 120).lastIndexOf(" ")) + "...";
    return trimmedLead;
  };
  const navigate = useNavigate();

  return (
    <Fragment>
      {!item ? (
        view ? (
          <div
            role="status"
            className="space-y-8 mt-8 gap-x-0 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center"
          >
            <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg
                className="w-12 h-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path>
              </svg>
            </div>
            <div className="w-full sm:pr-8">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="w-full">
            <div className="h-full border-2 border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex justify-center items-center animate-pulse w-full h-48 bg-gray-400 rounded-t-lg dark:bg-gray-700">
                <svg
                  className="w-12 h-12 text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
              </div>

              <div className="p-6">
                <h2 className="bg-gray-400 dark:bg-gray-700 animate-pulse h-4 w-1/4 mb-2 rounded-lg"></h2>
                <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500 dark:bg-gray-700 rounded-lg"></h1>
                <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400 dark:bg-gray-700 rounded-lg"></p>
                <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400 dark:bg-gray-700 rounded-lg"></p>
                <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400 dark:bg-gray-700 rounded-lg"></p>
                <div className="flex items-center flex-wrap ">
                  <a className="bg-indigo-300 dark:bg-gray-700 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0 rounded-lg"></a>
                  <span className="bg-indigo-300 dark:bg-gray-700 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1 rounded-lg"></span>
                </div>
              </div>
            </div>
          </div>
        )
      ) : (
        <Card
          showDetail
          showImage
          showStruc
          classCard={
            view
              ? "sm:flex sm:flex-row sm:justify-between shadow-lg custom-shadow mt-8 overflow-hidden hover:shadow-purple w-full relative rounded-md transition ease-in-out group duration-200 hover:shadow-lg hover:shadow-[#E8E3FE] dark:bg-zinc-800 dark:hover:shadow-md dark:hover:custom-dark-shadow"
              : "mb-10 sm:mb-0 shadow-lg custom-shadow rounded-md flex flex-col relative ease-in-out duration-200 hover:shadow-lg hover:scale-105 hover:shadow-[#E8E3FE] dark:bg-zinc-800 dark:hover:shadow-md group"
          }
          imageUrl={item.image}
          classImage={
            view
              ? "inset-0 h-full w-full object-cover object-center"
              : "rounded-t-lg w-full h-full"
          }
          classMainImg={
            view ? "h-64 w-auto md:w-1/2 sm:w-2/4" : "m-auto w-full h-52"
          }
          cardBody={
            !view ? "w-80 mx-6 mt-5" : "w-100 h-[50%] sm:mr-3 mr-6 mt-4"
          }
          role={item.title}
          classRole={
            view
              ? "text-right font-bold md:text-2xl sm:text-xl text-xl text-gray-900 dark:text-[#E5E7EB]"
              : "text-right font-bold text-2xl text-gray-900 dark:text-[#E5E7EB]"
          }
          {...(!view
            ? {}
            : {
                description: handleLead(item.description),
                classDescription:
                  "sm:block hidden mt-2 text-[#6C757D] text-base sm:text-sm",
              })}
        >
          <div
            className={
              view
                ? "bg-[#F6F6FB] text-[#4C0FFB] dark:bg-[#212125] dark:text-[#b073cc] font-bold px-3 rounded-md self-end absolute top-2 right-2"
                : "bg-[#F6F6FB] text-[#4C0FFB] dark:bg-[#212125] dark:text-[#b073cc] font-bold px-3 rounded-md self-end absolute top-2 left-2"
            }
          >
            {item.archive}
          </div>
          {!view ? (
            <div className="mx-6 my-5 order-3">
              <div className="flex justify-start">
                <div className="flex items-center">
                  <BsFillCircleFill className="w-2 text-[#1F18DB] dark:text-[#b073cc]" />
                  <h3 className="text-[#636363] dark:text-[#E5E7EB] mr-3 pt-1">
                    {item.lesson} درس
                  </h3>
                </div>
                <div className="flex items-center mr-4">
                  <BsClock className="w-3 text-[#4C0FFB] dark:text-[#b073cc]" />
                  <h3 className="text-[#636363] dark:text-[#E5E7EB] mr-3 pt-1">
                    {item.hour} ساعت
                  </h3>
                </div>
              </div>
            </div>
          ) : (
            <div className="sm:m-0 mx-6 sm:absolute sm:top-32 2xl:right-[40%] xl:right-[35%] lg:right-[28%] sm:right-[20%]">
              <div className="flex sm:justify-start sm:m-0 my-3">
                <div className="flex items-center ml-4">
                  <BsPerson className="w-5 dark:text-[#E5E7EB]" />
                  <h3 className="text-[#636363] dark:text-[#E5E7EB] pr-2">
                    {item.teacher}
                  </h3>
                </div>
                <div className="sm:flex items-center hidden">
                  <BsPeople className="w-5 dark:text-[#E5E7EB]" />
                  <h3 className="text-[#636363] dark:text-[#E5E7EB] pr-2 mt-1">
                    {item.numberOfStudents}
                  </h3>
                </div>
              </div>

              <div className="sm:flex sm:justify-start hidden">
                <BsStar className="text-[#F9A134] mt-2" />
                <BsStar className="text-[#F9A134] mt-2" />
                <BsFillStarFill className="text-[#F9A134] mt-2" />
                <BsFillStarFill className="text-[#F9A134] mt-2" />
                <BsFillStarFill className="text-[#F9A134] mt-2" />
                <h3 className="text-[#3A3737] dark:text-[#E5E7EB] pt-2 pr-2">
                  {item.likeCount}
                </h3>
                <h5 className="text-[#605d5d] dark:text-[#E5E7EB] pt-3 pr-2 text-xs">
                  (145,236)
                </h5>
              </div>

              <div className="flex sm:justify-between justify-start">
                <div className="flex items-center">
                  <BsClock className="w-2 text-[#4C0FFB] dark:text-[#b073cc]" />
                  <h3 className="text-[#636363] dark:text-[#E5E7EB] text-sm w-16 mr-2 pt-1">
                    {item.hour} ساعت
                  </h3>
                </div>
                <div className="flex items-center">
                  <BsFillCircleFill className="w-1 text-[#1F18DB] dark:text-[#b073cc]" />
                  <h3 className="text-[#636363] dark:text-[#E5E7EB] text-sm w-16 mr-2 pt-1">
                    {item.lesson} درس
                  </h3>
                </div>
                <div className="items-center sm:flex hidden">
                  <BsFillCircleFill className="w-1 text-[#1F18DB] dark:text-[#b073cc]" />
                  <h3 className="text-[#636363] dark:text-[#E5E7EB] text-sm w-16  mr-2 pt-1">
                    {item.level}
                  </h3>
                </div>
              </div>
              <div className="hidden justify-start sm:flex">
                <div className="flex items-center">
                  <BsFillCircleFill className="w-1 text-[#1F18DB] dark:text-[#b073cc]" />
                  <h3 className="text-[#636363] dark:text-[#E5E7EB] mr-1 text-sm pt-1">
                    {item.date}
                  </h3>
                </div>
                <div className="flex items-center mr-3 text-[#636363] dark:text-[#E5E7EB]">
                  <BsEye className="w-3" />
                  <h3 className="text-sm pt-1 pr-1">{item.view}</h3>
                </div>
              </div>
            </div>
          )}
          <div
            className={
              !view
                ? "mx-6 order-last mt-2 mb-5"
                : "md:mx-6 sm:ml-2 order-last sm:inline-block float-left mx-2 mt-2 mb-5"
            }
          >
            {!view ? (
              <div className="flex justify-between">
                <div className="flex items-center">
                  <BsPerson className="w-5 dark:text-[#E5E7EB]" />
                  <h3 className="text-[#636363] dark:text-[#E5E7EB] pr-2">
                    {item.teacher}
                  </h3>
                </div>

                <div className="flex">
                  <BsFillStarFill className="text-[#F9A134] m-auto" />
                  <h3 className="text-[#3A3737] dark:text-[#E5E7EB] pt-2 pr-2">
                    <p className="text-[#6C757D] inline-block">5 / </p>
                    {item.likeCount}
                  </h3>
                </div>
              </div>
            ) : null}
            <div
              className={
                !view
                  ? "flex justify-between"
                  : "flex sm:justify-center justify-between"
              }
            >
              {!view ? (
                <div className="flex items-center">
                  <BsPeople className="w-5 dark:text-[#E5E7EB]" />
                  <h3 className="text-[#636363] dark:text-[#E5E7EB] pr-2 mt-1">
                    {item.numberOfStudents}
                  </h3>
                </div>
              ) : null}
              {view ? (
                <div className="flex justify-start py-3 sm:hidden">
                  <BsStar className="text-[#F9A134] mt-2" />
                  <BsStar className="text-[#F9A134] mt-2" />
                  <BsFillStarFill className="text-[#F9A134] mt-2" />
                  <BsFillStarFill className="text-[#F9A134] mt-2" />
                  <BsFillStarFill className="text-[#F9A134] mt-2" />
                  <h3 className="text-[#3A3737] dark:text-[#E5E7EB] pt-2 pr-2">
                    {item.likeCount}
                  </h3>
                  <h5 className="text-[#605d5d] pt-3 pr-2 text-xs sm:block hidden">
                    (145,236)
                  </h5>
                </div>
              ) : null}
              <div className="items-center">
                <h3
                  className={
                    !view
                      ? "text-[#636363] dark:text-[#E5E7EB] py-3"
                      : "text-[#636363] dark:text-[#E5E7EB] sm:py-3 py-5 md:text-2xl sm:text-base"
                  }
                >
                  {item.price} ريال
                </h3>
              </div>
            </div>
            <div
              className={
                !view
                  ? "flex justify-between btn p-0 group-hover:border-lite-purple dark:group-hover:border-[#b073cc]"
                  : "flex items-stretch btn p-0 sm:w-fit sm:h-fit w-64 h-10 group-hover:border-lite-purple dark:group-hover:border-[#b073cc] md:mt-28 sm:mt-36"
              }
            >
              <Button
                className={`hover:btn-base md:w-[20%] h-fit md:p-4 ${
                  view ? "sm:w-fit w-fit sm:p-2 p-[11px]" : "sm:w-full p-4"
                } rounded-r-md outline-none self-end`}
              >
                <BsFillShareFill className="mx-auto dark:text-[#E5E7EB]" />
              </Button>
              <Button
                className={`hover:btn-base md:w-[20%] sm:w-fit w-fit h-fit md:p-4 ${
                  view ? "sm:p-2 p-[11px]" : "p-4 sm:w-full"
                } outline-none self-end`}
              >
                <BsFillBookmarkPlusFill className="mx-auto dark:text-[#E5E7EB]" />
              </Button>
              <Button
                onClick={() => navigate(`${item.id}`)}
                ButtonType="button"
                classButton={
                  !view
                    ? "hover:btn-base w-[60%] sm:w-full h-fit p-3 dark:text-[#E5E7EB] outline-0"
                    : "hover:bg-[#8055D9] hover:text-white dark:text-[#E5E7EB] md:w-40 sm:w-full w-60 sm:w-28 sm:p-2 md:text-base sm:text-xs"
                }
              >
                جزئیات دوره
              </Button>
            </div>
          </div>
        </Card>
      )}
    </Fragment>
  );
};

export default CardGridListView;
