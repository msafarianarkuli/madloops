import { Fragment, useState } from "react";
import { Button } from "../../Components/common/button-component/button.component";
import "../Navigation/navigation.styles.scss";
import { BsList } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiShoppingCartFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [navlines, setNavlines] = useState([
    { id: 1, title: "خانه", path: "/" },
    { id: 2, title: "دوره ها", path: "/kasi" },
    { id: 3, title: "اخبار و مقالات", path: "/morghi" },
    { id: 4, title: "تماس با ما", path: "/gavazn" },
  ]);

  return (
    <div className="container m-auto">
      <div className="grid xl:grid-cols-4 h-16 lg:grid-cols-12 md:grid-cols-12 grid-cols-2">
        <div className="xl:col-span-1 lg:col-span-2 md:col-span-1 col-span-1">
          <div className="flex justify-start items-center col-span-1 md:m-0 mr-3 mt-1">
            <img
              className="xl:mr-6 lg:mr-1 lg:w-16 md:w-14 w-12 h-auto"
              src={require("../../Assets/img/site-logo.png")}
              alt="shopping"
            />
            <span className="md:text-lg xs:text-sm  mr-2 text-deep-purple lg:block md:hidden">
              Mad Loops
            </span>
          </div>
        </div>
        <div className="menu col-span-2 xl:col-span-2 lg:col-span-8 md:col-span-9 md:block hidden">
          <div className="anim text-center h-16 lg:text-lg md:text-md relative">
            <a
              className="inline-block relative z-10 m-auto pt-4 border-t-4 h-16 first:border-deep-purple first:text-deep-purple"
              href="#"
            >
              خانه
            </a>
            <a
              className="inline-block relative z-10 m-auto pt-4 border-t-4 border-transparent h-16"
              href="#"
            >
              دوره ها
            </a>
            <a
              className="inline-block relative z-10 m-auto pt-4 border-t-4 border-transparent h-16"
              href="#"
            >
              اخبار و مقالات
            </a>
            <a
              className="inline-block relative z-10 m-auto pt-4 border-t-4 border-transparent h-16"
              href="#"
            >
              تماس با ما
            </a>
            {/* {navlines.map((navline) => {
              return (
                <NavLink
                  className={(isActive) =>
                    isActive
                      ? "inline-block relative z-10 pt-4 border-t-4 h-16 border-deep-purple text-deep-purple"
                      : "inline-block relative z-10 pt-4 border-t-4 border-transparent h-16"
                  }
                  key={navline.id}
                  to={navline.path}
                  end
                >
                  {navline.title}
                </NavLink>
              );
            })} */}
            <div className="animation border-deep-purple absolute h-16 top-0 z-0 border-t-4 start-home duration-300 ease-in-out"></div>
          </div>
        </div>
        <div className="menu xl:col-span-1 lg:col-span-2 md:col-span-2 md:block hidden">
          <div className="grid grid-cols-2 h-16">
            <div className="flex justify-end items-center col-span-1">
              <RiShoppingCartFill className="xl:ml-4 h-6 lg:ml-8 md:ml-12 text-2xl cursor-pointer duration-100 ease-in-out hover:scale-125 hover:text-deep-purple" />
            </div>
            <div className="flex justify-center items-center col-span-1">
              <Button
                classButton="btn border-2 border-deep-purple duration-300 ease-in-out lg:ml-0 md:ml-12
                text-deep-purple pt-1 pb-3 xl:px-10 lg:px-6 md:px-6 rounded-3xl text-lg hover:bg-deep-purple hover:text-white"
                >
                  ورود
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-end md:hidden relative">
            <div
              className={`${
                open
                  ? "bg-deep-purple h-screen m-auto pt-8 w-80 z-10 absolute"
                  : "w-10 z-0"
              } duration-300 ease-in-out relative`}
            >
              {open && (
                <div className="h-5/6">
                  <Button
                    classButton="btn bg-deep-purple border-r-2 border-b-2 border-white float-left duration-300 ease-in-out 
                text-white pt-1 pb-3 px-10 rounded-r-xl rounded-t-none text-lg hover:translate-x-1"
                  >
                    ورود
                  </Button>
                  <div className="float-left text-white m-3">
                    <RiShoppingCartFill className="text-xl cursor-pointer duration-100 ease-in-out hover:scale-125" />
                  </div>
                  <div className="pt-14 text-lg text-white text-center">
                    <a
                      className="block p-2 m-5 border-2 rounded-xl ring-offset-4 ring-offset-deep-purple ring-white ring-2 bg-white text-deep-purple"
                      href="#"
                    >
                      خانه
                    </a>
                    <a
                      className="block p-2 m-5 border-2 rounded-xl hover:bg-white hover:text-deep-purple duration-200 ease-in-out"
                      href="#"
                    >
                      دوره ها
                    </a>
                    <a
                      className="block p-2 m-5 border-2 rounded-xl hover:bg-white hover:text-deep-purple duration-200 ease-in-out"
                      href="#"
                    >
                      اخبار و مقالات
                    </a>
                    <a
                      className="block p-2 m-5 border-2 rounded-xl hover:bg-white hover:text-deep-purple duration-200 ease-in-out"
                      href="#"
                    >
                      تماس با ما
                    </a>
                  </div>
                  <p className="m-5 text-xs text-gray-400 absolute bottom-0 left-0">
                    Designed By Mad Loops -{" "}
                  </p>
                </div>
              )}

              {!open ? (
                <BsList
                  className={`bg-white text-deep-purple rounded-full border-2
             border-deep-purple text-4xl absolute p-1 -right-4 top-4 cursor-pointer`}
                  onClick={() => setOpen(!open)}
                />
              ) : (
                <BsArrowLeftShort
                  className={`bg-white text-deep-purple rounded-full border-2
              border-deep-purple text-4xl absolute p-1 -right-4 top-4 cursor-pointer`}
                  onClick={() => setOpen(!open)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
