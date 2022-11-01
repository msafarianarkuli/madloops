import React, { Fragment } from 'react';
import { Card } from './Card/card.component';
import { Button } from './button-component/button.component';
import { useNavigate } from 'react-router-dom';
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
} from 'react-icons/bs';

import img from '../../Assets/img/blog1.JPG';

const CardGridListView = ({ item, view }) => {
  const handleLead = (value) => {
    const trimmedLead =
      value
        .substring(0, 120)
        .substring(0, value.substring(0, 120).lastIndexOf(' ')) +
      '...';
    return trimmedLead;
  };
  const navigate = useNavigate();

  return (
    <Fragment>
      <Card
        showDetail
        showImage
        showStruc
        classCard={
          view
            ? 'sm:flex sm:flex-row sm:justify-between shadow-lg custom-shadow mt-8 overflow-hidden hover:shadow-purple w-full relative rounded-md transition ease-in-out group duration-200 hover:shadow-lg hover:shadow-[#E8E3FE] dark:bg-zinc-800 dark:hover:shadow-md dark:hover:custom-dark-shadow'
            : 'mb-10 sm:mb-0 shadow-lg custom-shadow rounded-md flex flex-col relative ease-in-out duration-200 hover:shadow-lg hover:scale-105 hover:shadow-[#E8E3FE] dark:bg-zinc-800 dark:hover:shadow-md group'
        }
        imageUrl={img}
        classImage={
          view
            ? 'inset-0 h-full w-full object-cover object-center'
            : 'rounded-t-lg w-full h-full'
        }
        classMainImg={
          view
            ? 'h-64 w-auto md:w-1/2 sm:w-2/4'
            : 'm-auto w-full h-52'
        }
        cardBody={
          !view ? 'w-80 mx-6 mt-5' : 'w-100 h-[50%] sm:mr-3 mr-6 mt-4'
        }
        role={item.title}
        classRole={
          view
            ? 'text-right font-bold md:text-2xl sm:text-xl text-xl text-gray-900 dark:text-[#E5E7EB]'
            : 'text-right font-bold text-2xl text-gray-900 dark:text-[#E5E7EB]'
        }
        {...(!view
          ? {}
          : {
              description: handleLead(item.lesson.description),
              classDescription:
                'sm:block hidden mt-2 text-[#6C757D] text-base sm:text-sm',
            })}
      >
        <div
          className={
            view
              ? 'bg-[#F6F6FB] text-[#4C0FFB] dark:bg-[#212125] dark:text-[#b073cc] font-bold px-3 rounded-md self-end absolute top-2 right-2'
              : 'bg-[#F6F6FB] text-[#4C0FFB] dark:bg-[#212125] dark:text-[#b073cc] font-bold px-3 rounded-md self-end absolute top-2 left-2'
          }
        >
          {/* {item.archive} modify */}
          پگ شده
        </div>
        {!view ? (
          <div className="mx-6 my-5 order-3">
            <div className="flex justify-start">
              <div className="flex items-center">
                <BsFillCircleFill className="w-2 text-[#1F18DB] dark:text-[#b073cc]" />
                <h3 className="text-[#636363] dark:text-[#E5E7EB] mr-3 pt-1">
                  {/* {item.lesson} درس //modify */}
                  180
                </h3>
              </div>
              <div className="flex items-center mr-4">
                <BsClock className="w-3 text-[#4C0FFB] dark:text-[#b073cc]" />
                <h3 className="text-[#636363] dark:text-[#E5E7EB] mr-3 pt-1">
                  {/* {item.hour} ساعت //modify */}
                  42.5
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
                  {item.teacher.fullName}
                </h3>
              </div>
              <div className="sm:flex items-center hidden">
                <BsPeople className="w-5 dark:text-[#E5E7EB]" />
                <h3 className="text-[#636363] dark:text-[#E5E7EB] pr-2 mt-1">
                  {/* {item.numberOfStudents} //modify */}
                  50
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
                {/* {item.likeCount} //modify */}3
              </h3>
              <h5 className="text-[#605d5d] dark:text-[#E5E7EB] pt-3 pr-2 text-xs">
                (145,236)
              </h5>
            </div>

            <div className="flex sm:justify-between justify-start">
              <div className="flex items-center">
                <BsClock className="w-2 text-[#4C0FFB] dark:text-[#b073cc]" />
                <h3 className="text-[#636363] dark:text-[#E5E7EB] text-sm w-16 mr-2 pt-1">
                  {/* {item.hour} ساعت //modify */}
                  180
                </h3>
              </div>
              <div className="flex items-center">
                <BsFillCircleFill className="w-1 text-[#1F18DB] dark:text-[#b073cc]" />
                <h3 className="text-[#636363] dark:text-[#E5E7EB] text-sm w-16 mr-2 pt-1">
                  {/* {item.lesson} درس //modify */}
                  180
                </h3>
              </div>
              <div className="items-center sm:flex hidden">
                <BsFillCircleFill className="w-1 text-[#1F18DB] dark:text-[#b073cc]" />
                <h3 className="text-[#636363] dark:text-[#E5E7EB] text-sm w-16  mr-2 pt-1">
                  {/* {item.level} //modify */}
                  همه سطح
                </h3>
              </div>
            </div>
            <div className="hidden justify-start sm:flex">
              <div className="flex items-center">
                <BsFillCircleFill className="w-1 text-[#1F18DB] dark:text-[#b073cc]" />
                <h3 className="text-[#636363] dark:text-[#E5E7EB] mr-1 text-sm pt-1">
                  {/* {item.date} //modify */}
                  date
                </h3>
              </div>
              <div className="flex items-center mr-3 text-[#636363] dark:text-[#E5E7EB]">
                <BsEye className="w-3" />
                <h3 className="text-sm pt-1 pr-1">
                  {/* {item.view} // modify */}
                  view
                </h3>{' '}
                //modify
              </div>
            </div>
          </div>
        )}
        <div
          className={
            !view
              ? 'mx-6 order-last mt-2 mb-5'
              : 'md:mx-6 sm:ml-2 order-last sm:inline-block float-left mx-2 mt-2 mb-5'
          }
        >
          {!view ? (
            <div className="flex justify-between">
              <div className="flex items-center">
                <BsPerson className="w-5 dark:text-[#E5E7EB]" />
                <h3 className="text-[#636363] dark:text-[#E5E7EB] pr-2">
                  {item.teacher.fullName}
                </h3>
              </div>

              <div className="flex">
                <BsFillStarFill className="text-[#F9A134] m-auto" />
                <h3 className="text-[#3A3737] dark:text-[#E5E7EB] pt-2 pr-2">
                  <p className="text-[#6C757D] inline-block">5 / </p>
                  {/* {item.likeCount} //modify */}
                  180
                </h3>
              </div>
            </div>
          ) : null}
          <div
            className={
              !view
                ? 'flex justify-between'
                : 'flex sm:justify-center justify-between'
            }
          >
            {!view ? (
              <div className="flex items-center">
                <BsPeople className="w-5 dark:text-[#E5E7EB]" />
                <h3 className="text-[#636363] dark:text-[#E5E7EB] pr-2 mt-1">
                  {/* {item.numberOfStudents} //modify */}
                  180
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
                  {/* {item.likeCount} //modify */}
                  180
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
                    ? 'text-[#636363] dark:text-[#E5E7EB] py-3'
                    : 'text-[#636363] dark:text-[#E5E7EB] sm:py-3 py-5 md:text-2xl sm:text-base'
                }
              >
                {item.cost} ريال
              </h3>
            </div>
          </div>
          <div
            className={
              !view
                ? 'flex justify-between btn p-0 group-hover:border-lite-purple dark:group-hover:border-[#b073cc]'
                : 'flex items-stretch btn p-0 sm:w-fit sm:h-fit w-64 h-10 group-hover:border-lite-purple dark:group-hover:border-[#b073cc] md:mt-28 sm:mt-36'
            }
          >
            <Button
              className={`hover:btn-base md:w-[20%] h-fit md:p-4 ${
                view
                  ? 'sm:w-fit w-fit sm:p-2 p-[11px]'
                  : 'sm:w-full p-4'
              } rounded-r-md outline-none self-end`}
            >
              <BsFillShareFill className="mx-auto dark:text-[#E5E7EB]" />
            </Button>
            <Button
              className={`hover:btn-base md:w-[20%] sm:w-fit w-fit h-fit md:p-4 ${
                view ? 'sm:p-2 p-[11px]' : 'p-4 sm:w-full'
              } outline-none self-end`}
            >
              <BsFillBookmarkPlusFill className="mx-auto dark:text-[#E5E7EB]" />
            </Button>
            <Button
              onClick={() => navigate(`${item._id}`)}
              ButtonType="button"
              classButton={
                !view
                  ? 'hover:btn-base w-[60%] sm:w-full h-fit p-3 dark:text-[#E5E7EB] outline-0'
                  : 'hover:bg-[#8055D9] hover:text-white dark:text-[#E5E7EB] md:w-40 sm:w-full w-60 sm:w-28 sm:p-2 md:text-base sm:text-xs'
              }
            >
              جزئیات دوره
            </Button>
          </div>
        </div>
      </Card>
    </Fragment>
  );
};

export default CardGridListView;
