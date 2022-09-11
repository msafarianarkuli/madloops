import { Card } from "./Card/card.component";
import { Button } from "./button-component/button.component";
import {
  BsFillStarFill,
  BsStar,
  BsPerson,
  BsPeople,
  BsFillCircleFill,
  BsClock,
  BsEye,
} from "react-icons/bs";

const CardGridListView = ({ item, view }) => {
  return (
    <Card
      showDetail
      showImage
      showStruc
      classCard={
        view
          ? "sm:flex sm:flex-row sm:justify-between mx-8 overflow-hidden mt-4 w-100 mx-2 w-full mt-16 relative shadow-xl shadow-[#E5E5E5] rounded-md transition ease-in-out duration-500 hover:shadow-lg hover:shadow-[#E8E3FE]"
          : "m-auto text-gray-500 shadow-lg shadow-[#E5E5E5] rounded-md flex flex-col relative transition ease-in-out duration-500 hover:drop-shadow-lg hover:shadow-[#E8E3FE]"
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
      cardBody={!view ? "w-80 mx-6 mt-5" : "w-100 h-[50%] sm:mr-3 mr-6 mt-4"}
      role={item.title}
      classRole={
        view
          ? "text-right font-bold md:text-2xl sm:text-xl text-xl text-gray-900"
          : "text-right font-bold text-2xl text-gray-900"
      }
      {...(!view
        ? {}
        : {
            description: [item.description],
            classDescription:
              "sm:block hidden mt-2 text-[#6C757D] text-base sm:text-sm",
          })}
    >
      <div
        className={
          view
            ? "bg-[#F6F6FB] text-[#4C0FFB] px-3 rounded-full self-end absolute top-2 right-2"
            : "bg-[#F6F6FB] text-[#4C0FFB] px-3 rounded-full self-end absolute top-2 left-2"
        }
      >
        {item.archive}
      </div>
      {!view ? (
        <div className="mx-6 my-5 order-3">
          <div className="flex justify-start">
            <div className="flex items-center">
              <BsFillCircleFill className="w-2 text-[#1F18DB]" />
              <h3 className="text-[#636363] mr-3 pt-1">{item.lesson} درس</h3>
            </div>
            <div className="flex items-center mr-4">
              <BsClock className="w-3 text-[#4C0FFB]" />
              <h3 className="text-[#636363] mr-3 pt-1">{item.hour} ساعت</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="sm:m-0 mx-6 sm:absolute sm:top-32 2xl:right-[45%] xl:right-[39%] lg:right-[33%] sm:right-[25%]">
          <div className="flex sm:justify-start sm:m-0 my-3">
            <div className="flex items-center ml-4">
              <BsPerson className="w-5" />
              <h3 className="text-[#636363] pr-2">{item.teacher}</h3>
            </div>
            <div className="sm:flex items-center hidden">
              <BsPeople className="w-5" />
              <h3 className="text-[#636363] pr-2 mt-1">
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
            <h3 className="text-[#3A3737] pt-2 pr-2">{item.likeCount}</h3>
            <h5 className="text-[#605d5d] pt-3 pr-2 text-xs">(145,236)</h5>
          </div>

          <div className="flex sm:justify-between justify-start">
            <div className="flex items-center">
              <BsClock className="w-2 text-[#4C0FFB]" />
              <h3 className="text-[#636363] text-sm w-16 mr-2 pt-1">
                {item.hour} ساعت
              </h3>
            </div>
            <div className="flex items-center">
              <BsFillCircleFill className="w-1 text-[#1F18DB]" />
              <h3 className="text-[#636363] text-sm w-16 mr-2 pt-1">
                {item.lesson} درس
              </h3>
            </div>
            <div className="items-center sm:flex hidden">
              <BsFillCircleFill className="w-1 text-[#1F18DB]" />
              <h3 className="text-[#636363] text-sm w-16  mr-2 pt-1">
                {item.level}
              </h3>
            </div>
          </div>
          <div className="hidden justify-start sm:flex">
            <div className="flex items-center">
              <BsFillCircleFill className="w-1 text-[#1F18DB]" />
              <h3 className="text-[#636363] mr-1 text-sm pt-1">{item.date}</h3>
            </div>
            <div className="flex items-center mr-3 text-[#636363]">
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
            : "md:mx-6 sm:ml-2 order-last sm:inline-block float-left mx-6 mt-2 mb-5"
        }
      >
        {!view ? (
          <div className="flex justify-between">
            <div className="flex items-center">
              <BsPerson className="w-5" />
              <h3 className="text-[#636363] pr-2">{item.teacher}</h3>
            </div>

            <div className="flex">
              <BsFillStarFill className="text-[#F9A134] m-auto" />
              <h3 className="text-[#3A3737] pt-2 pr-2">
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
              <BsPeople className="w-5" />
              <h3 className="text-[#636363] pr-2 mt-1">
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
              <h3 className="text-[#3A3737] pt-2 pr-2">{item.likeCount}</h3>
              <h5 className="text-[#605d5d] pt-3 pr-2 text-xs sm:block hidden">
                (145,236)
              </h5>
            </div>
          ) : null}
          <div className="items-center">
            <h3
              className={
                !view
                  ? "text-[#636363] py-3"
                  : "text-[#636363] sm:py-3 py-5 md:text-2xl sm:text-base"
              }
            >
              {item.price} ريال
            </h3>
          </div>
        </div>
        <Button
          ButtonType="button"
          classButton={
            !view
              ? "btn btn-base w-full"
              : "btn btn-base md:w-40 sm:w-full w-60 sm:w-28 md:btn sm:p-2 md:text-base sm:text-xs md:mt-28 sm:mt-36"
          }
        >
          جزئیات دوره
        </Button>
      </div>
    </Card>
  );
};

export default CardGridListView;
