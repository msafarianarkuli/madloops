import React from "react";
import { Formik, Form } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../common/Inputs/TextInputs/Input";
import { Button } from "../../common/button-component/button.component";
import zing from "../../../Assets/img-user-panel/zing.svg";
import cart from "../../../Assets/img-user-panel/cart.svg";
import cart2 from "../../../Assets/img-user-panel/cart2.svg";
import { selectCartCount } from "../../../store/cart/cartSlice";
import { useSelector } from "react-redux";

const PanelHeader = ({ data, onSearch }) => {
  const counter = useSelector(selectCartCount);
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex justify-end items-center py-5 lg:py-8 px-4 lg:px-2 animate-[onLoadPanel_.5s_ease-in]">
      <div className="basis-1/4">
        <img
          src={zing}
          className="ml-auto sm:mx-auto cursor-pointer w-10 h-10 sm:w-auto sm:h-auto hover:scale-125 transition ease-in-out duration-300"
        />
      </div>
      <div className="basis-1/2">
        {location.pathname === "/user-panel" ? (
          <p className="text-3xl md:text-4xl xl:text-5xl text-center font-bold text-lite-purple dark:text-dark-primary-title">
            داشبورد
          </p>
        ) : (
          <Formik
            initialValues={{ search: "" }}
            onSubmit={(values) => {
              onSearch(
                data
                  ?.map((data) => data)
                  .filter(
                    (course) =>
                      course.title
                        .toString()
                        .toLowerCase()
                        .indexOf(values.search) > -1
                  )
              );
            }}
          >
            <Form>
              <Input
                name="search"
                type="search"
                placeholder="دوره مورد نظر.."
                err={true}
                className="border-2 mb-3 dark:border-gray-600 dark:text-gray-400 rounded-lg outline-0 w-full text-sm sm:text-lg py-1 md:py-2 px-2 focus:border-lite-purple
                  dark:focus:border-lite-purple duration-300 dark:bg-transparent"
              />
              <Button
                ButtonType="submit"
                classButton="border rounded-lg w-full py-1 md:py-2 px-2 border-lite-purple text-lite-purple hover:text-white hover:bg-lite-purple
                transition ease-out duration-300 dark:bg-lite-purple dark:text-dark-primary-title dark:hover:border-deep-purple dark:hover:bg-deep-purple"
              >
                جست و جو
              </Button>
            </Form>
          </Formik>
        )}
      </div>
      {counter === 0 ? (
        <div className="basis-1/4" onClick={() => navigate("/cart")}>
          <img
            src={cart2}
            className="mr-auto sm:mx-auto cursor-pointer w-10 h-10 sm:w-auto sm:h-auto hover:scale-125 transition ease-in-out duration-300"
          />
        </div>
      ) : (
        <div className="basis-1/4" onClick={() => navigate("/cart")}>
          <img
            src={cart}
            className="mr-auto sm:mx-auto cursor-pointer w-10 h-10 sm:w-auto sm:h-auto hover:scale-125 transition ease-in-out duration-300"
          />
        </div>
      )}
    </div>
  );
};

export default PanelHeader;
