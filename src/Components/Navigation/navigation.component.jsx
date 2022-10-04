import React, { useState, useContext } from "react";
import { Button } from "../../Components/common/button-component/button.component";
import "../Navigation/navigation.styles.scss";
import { BsList } from "react-icons/bs";
import { BsArrowLeftShort, BsCartFill } from "react-icons/bs";
import { RiShoppingCartFill, RiLoginCircleFill } from "react-icons/ri";
import { SiCpanel } from "react-icons/si";
import { Link, NavLink, Outlet } from "react-router-dom";
import CartHover from "./../content/Cart/cart-hover.component";
import { CartContext } from "../../Core/context/cart.context";

const Navigation = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [navlines] = useState([
    { id: 1, title: "خانه", path: "/" },
    { id: 2, title: "دوره ها", path: "/courses" },
    { id: 3, title: "اخبار و مقالات", path: "/blogs" },
    { id: 4, title: "تماس با ما", path: "/contactUs" },
  ]);

  return (
    <div className="dark:bg-dark-primary bg-white">
      <div className="container m-auto z-40 dark:bg-dark-primary bg-white sticky top-0">
        <div className="grid h-16 md:grid-cols-12 grid-cols-2">
          <div className="lg:col-span-2 md:col-span-1 col-span-1">
            <div className="flex justify-start items-center col-span-1 md:m-0 mr-3 sm:mt-1 mt-2">
              <Link to="/">
                <img
                  className="xl:mr-6 lg:mr-1 lg:w-16 md:w-14 w-12 h-auto"
                  src={require("../../Assets/img/site-logo.png")}
                  alt="shopping"
                />
              </Link>
              <Link to="/">
                <span className="md:text-lg xs:text-sm mr-2 dark:text-lite-purple text-deep-purple lg:block md:hidden">
                  Mad Loops
                </span>
              </Link>
            </div>
          </div>
          <div className="menu col-span-2 2xl:col-span-6 xl:col-span-6 lg:col-span-7 md:col-span-6 md:block hidden">
            <div className="anim text-center h-16 lg:text-lg md:text-md relative">
              {navlines.map((navline) => {
                return (
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "inline-block relative z-10 pt-4 border-t-4 h-16 dark:border-lite-purple dark:text-lite-purple border-deep-purple text-deep-purple"
                        : "inline-block relative z-10 pt-4 border-t-4 border-transparent h-16 dark:text-gray-400"
                    }
                    key={navline.id}
                    to={navline.path}
                    end
                  >
                    {navline.title}
                  </NavLink>
                );
              })}

              <div className="animation dark:border-lite-purple border-deep-purple absolute h-16 top-0 z-0 border-t-4 start-home duration-300 ease-in-out"></div>
            </div>
          </div>
          <div className="menu 2xl:col-span-4 xl:col-span-4 lg:col-span-3 md:col-span-5 md:block hidden">
            <div className="grid grid-cols-3 h-16">
              <div className="flex justify-end items-center col-span-1 relative">
                <img
                  src={require("../../Assets/bag.svg").default}
                  alt=""
                  onMouseOver={() => setIsCartOpen(!isCartOpen)}
                  onMouseOut={() => setIsCartOpen(!isCartOpen)}
                  className="h-9 w-fit  fill-black dark:fill-dark-primary-title cursor-pointer relative z-30"
                />
                {console.log(isCartOpen)}
                {cartCount >= 1 && (
                  <div className="absolute bg-red-500 rounded-md w-5 h-5 text-center text-base text-white dark:text-dark-primary top-1 md:-left-2 font-bold md:block hidden z-40">
                    {cartCount}
                  </div>
                )}
                <div className="md:ml-24 cursor-pointer absolute hover:scale-110 duration-150">
                  <Link to="/user-panel">
                    <SiCpanel className="text-5xl text-deep-purple animate-[onHoverGoogle_1s_ease-in-out_infinite]" />
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center col-span-2">
                <Link to="login">
                  <Button
                    classButton="btn border-2 dark:border-lite-purple border-deep-purple duration-300 ease-in-out xl:text-xl lg:ml-0 md:ml-12 dark:text-lite-purple
                    text-deep-purple pt-2 pb-3 xl:px-10 lg:px-6 md:px-4 rounded-xl text-lg dark:hover:bg-lite-purple hover:bg-deep-purple dark:hover:text-white hover:text-white"
                  >
                    ورود / ثبت نام
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="fixed top-0 left-0 md:hidden z-30">
            <div
              className={`${
                open
                  ? "bg-deep-purple dark:bg-dark-secondary h-screen pt-8 w-80 relative"
                  : "w-10 z-0"
              } duration-300 ease-in-out absolute top-0 left-0`}
            >
              {open && (
                <div className="h-5/6">
                  <Link to="/login">
                    <Button
                      classButton="btn dark:bg-dark-secondary bg-deep-purple border-r-2 border-l-0 dark:border-lite-purple border-white float-left duration-300 ease-in-out 
                      text-white dark:text-gray-300 pt-2 pb-3 px-10 rounded-r-xl rounded-l-none text-lg hover:translate-x-1"
                    >
                      ورود / ثبت نام
                    </Button>
                  </Link>
                  <div className="float-left text-white m-3">
                    <div className="flex justify-end items-center col-span-1 relative">
                      <BsCartFill
                        onMouseOver={() => setIsCartOpen(!isCartOpen)}
                        onMouseOut={() => setIsCartOpen(!isCartOpen)}
                        className="h-9 w-fit dark:text-lite-purple sm:text-deep-purple text-lite-pink cursor-pointer sm:z-0 z-30 relative"
                      />
                      <div className="absolute sm:text-white text-dark-secondary dark:text-dark-primary top-5 md:left-4 text-md font-bold md:block hidden sm:z-10 z-50 cursor-pointer">
                        {cartCount}
                      </div>
                    </div>
                  </div>
                  <div className="pt-14 text-lg text-white text-center">
                    {navlines.map((navline) => {
                      return (
                        <NavLink
                          className={({ isActive }) =>
                            isActive
                              ? "block p-2 m-5 border-2 dark:border-dark-secondary rounded-xl ring-offset-4 dark:ring-offset-lite-purple ring-offset-deep-purple dark:ring-dark-secondary ring-white ring-2 dark:bg-dark-secondary bg-white dark:text-gray-300 text-deep-purple"
                              : "block p-2 m-5 border-2 rounded-xl dark:hover:bg-gray-300 hover:bg-white dark:hover:text-dark-secondary hover:text-deep-purple duration-200 ease-in-out"
                          }
                          key={navline.id}
                          to={navline.path}
                          end
                        >
                          {navline.title}
                        </NavLink>
                      );
                    })}
                  </div>
                  <p className="m-5 text-xs text-gray-400 absolute bottom-0 left-0">
                    Designed By Mad Loops -
                  </p>
                </div>
              )}

              {!open ? (
                <BsList
                  className={`bg-white dark:bg-dark-primary dark:text-lite-purple text-deep-purple rounded-full border-2
                border-deep-purple dark:border-lite-purple text-4xl absolute p-1 -right-20 top-3 cursor-pointer`}
                  onClick={() => setOpen(!open)}
                />
              ) : (
                <BsArrowLeftShort
                  className={`bg-white dark:bg-dark-secondary dark:text-lite-purple text-deep-purple rounded-full border-2
                border-deep-purple dark:border-lite-purple text-4xl absolute p-1 -right-4 top-4 cursor-pointer`}
                  onClick={() => setOpen(!open)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* {isCartOpen && <CartHover />} */}
      <CartHover />
      <Outlet />
    </div>
  );
};

export default Navigation;
