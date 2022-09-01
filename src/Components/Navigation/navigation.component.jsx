import { useState } from "react";
import { Button } from "../../Components/common/button-component/button.component";
import "../Navigation/navigation.styles.css";
import { BsJustify } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";

const Navigation = () => {
  const [open, setOpen] = useState(true);

  // const burger = document.querySelector("#burger");
  // const menu = document.querySelectorAll(".menu");

  // burger.addEventListener("click", () => {
  //   if (menu.classList.contains("hidden")) {
  //     menu.classList.remove("hidden");
  //   } else {
  //     menu.classList.add("hidden");
  //   }
  // });

  return (
    <div className="container m-auto">
      <div className="grid xl:grid-cols-4 h-16 lg:grid-cols-12 md:grid-cols-12 grid-cols-2">
        <div className="xl:col-span-1 lg:col-span-2 md:col-span-1 col-span-1">
          <div className="flex justify-start items-center col-span-1 md:m-0 mr-3 mt-1">
            <img
              className="xl:mr-6 lg:mr-1 lg:w-16 md:w-12 w-12 h-auto"
              src={require("../../Assets/img/site-logo.png")}
              alt="shopping"
            />
            <span className="text-lg mr-2 text-deep-purple lg:block md:hidden">
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
            <div className="animation border-deep-purple absolute h-16 top-0 z-0 border-t-4 start-home duration-300 ease-in-out"></div>
          </div>
        </div>
        <div className="menu xl:col-span-1 lg:col-span-2 md:block hidden">
          <div className="grid grid-cols-2 h-16">
            <div className="flex justify-end items-center col-span-1">
              <img
                className="xl:ml-2 h-6 lg:ml-6 md:ml-12"
                src={require("../../Assets/img/shopping-card.png")}
                alt="shopping"
              />
            </div>
            <div className="flex justify-center items-center col-span-1">
              <Button
                classButton="btn border-2 border-deep-purple duration-300 ease-in-out 
                text-deep-purple pt-1 pb-3 px-10 rounded-3xl text-lg hover:bg-deep-purple hover:text-white hover:text-white"
              >
                ورود
              </Button>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-end px-4 md:hidden col-span-1" id="burger">
          <svg
            className="w-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div> */}

        <div className="flex justify-end md:hidden">
          <div
            className={`bg-deep-purple h-screen p-5 pt-8 ${
              open ? "w-80" : "w-0 "
            } duration-300 ease-in-out relative`}
          >
            <BsArrowLeftShort
              className={`bg-white text-deep-purple rounded-full border-2
             border-deep-purple text-3xl absolute -right-3 top-9 cursor-pointer ${!open ? '' : ''}`}
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
