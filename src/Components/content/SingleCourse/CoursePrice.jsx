import React, { useState, useRef, useEffect } from "react";
import { FaCoins } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addBookMark } from "../../../store/bookmark/bookmarkSlice";
import { addItem } from "../../../store/cart/cartSlice";
import Modal from "../../common/Modal/modal.component";
import { Button } from "./../../common/button-component/button.component";

const CoursePrice = ({ item }) => {
  const future = new Date(item?.startDate).getTime();
  // console.log(future);
  const futureTime = new Date(future + 86400000 * 5).getTime();
  // console.log(futureTime);
  // console.log(Date.now() - futureTime);
  const [showModal, setShowModal] = useState(false);
  const [showEModal, setEShowModal] = useState(false);
  const [minTimer, setMinTimre] = useState({});
  const [time, setTime] = useState();
  // new Date(new Date(item?.startDate).getTime() + 5000).getTime()
  // console.log(time);
  const [stop, setStop] = useState(false);
  const dispatch = useDispatch();
  const intervalRef = useRef(null);
  const addProductToCart = () => dispatch(addItem(item));
  const addProductForSave = () => dispatch(addBookMark(item));

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openEModal = () => {
    setEShowModal((prev) => !prev);
  };

  // useEffect(() => {
  //   setTime(Date.now() - futureTime);
  // }, [item?.startDate]);

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now() - futureTime);
      console.log(getReturnValues(time));
    }, 1000);
  }, []);

  // useEffect(() => {
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current);
  //     intervalRef.current = null;
  //     return;
  //   }

  //   const interval = (intervalRef.current = setInterval(() => {
  //     setTime(
  //       new Date(new Date(item?.startDate).getTime() + 86400000 * 5).getTime() -
  //         Date.now()
  //       // new Date(item?.startDate).getTime()
  //     );
  //   }, 1000));

  //   return () => clearInterval(interval);
  // }, [stop]);

  // if (minTimer?.seconds <= 0) {
  //   setStop(true);
  // }
  const getReturnValues = (countDown) => {
    // console.log(date);
    // const countDown = new Date(date).getTime() - Date.now();
    // console.log(countDown);
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
    // setMinTimre({ seconds });
    return [days, hours, minutes, seconds];
  };
  // console.log(getReturnValues(time));
  return (
    <div className="course-Detail-container">
      <div className="course-detail-title-box">
        <p className="course-detail-title">قیمت</p>
      </div>
      <div className="course-detail-item-odd">
        <div className="flex items-center">
          <FaCoins />
          <p className="mr-3">قیمت دوره:</p>
        </div>
        <div>
          <p>
            {item?.disCount !== item?.cost ? (
              <del className="line-through decoration-red-600">
                {item?.cost} تومان
              </del>
            ) : (
              <span className="text-[#42CD36]"> {item?.cost} تومان</span>
            )}
          </p>
        </div>
      </div>
      {item?.disCount !== item?.cost ? (
        <>
          <div className="flex justify-between text-gray-400 bg-[#F9F9FF] text-lg py-2 px-5 dark:bg-dark-secondary dark:text-dark-text">
            <div className="flex items-center">
              <TbDiscount2 />
              <p className="mr-3">قیمت دوره با تخفیف:</p>
            </div>
            <div>
              <p className="text-[#42CD36]">{item?.disCount} تومان</p>
            </div>
          </div>

          <div className="flex justify-center text-gray-400 text-lg py-2 px-5 bg-[#E8E8E8] dark:bg-dark-tertiary dark:text-dark-text">
            <div>
              <p className="text-[#42CD36]">09:34:50:28</p>
            </div>
          </div>
        </>
      ) : null}
      <div>
        <div>
          <Button
            onClick={openModal}
            classButton="text-white w-full text-lg xl:py-2 md:py-3 sm:py-4 py-2 px-5 bg-zinc-400 hover:bg-zinc-500 dark:bg-zinc-600 cursor-pointer dark:hover:bg-zinc-700 duration-300 outline-0"
          >
            افزودن به علاقه مندی
          </Button>
        </div>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          click={addProductForSave}
        />
      </div>
      <div>
        <div className="cursor-pointer">
          <Button
            onClick={openEModal}
            classButton="text-white w-full text-lg xl:py-2 md:py-3 sm:py-4 py-2 px-5 bg-[#42CD36] hover:bg-green-600 duration-300"
          >
            افزودن به سبد خرید
          </Button>
        </div>
        <Modal
          showModal={showEModal}
          setShowModal={setEShowModal}
          click={addProductToCart}
        />
      </div>
    </div>
  );
};

export default CoursePrice;
