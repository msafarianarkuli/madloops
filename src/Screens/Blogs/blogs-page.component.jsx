import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../Core/services/Fake Service/Blogs";
import { FieldName } from "./../../Components/common/field-name-component/field-name.component";
import SearchBar from "./../../Components/common/search-bar.component";
import { Typewriter } from "react-simple-typewriter";
import { Card } from "./../../Components/common/Card/card.component";
import { BsFillCircleFill, BsEye, BsHeart } from "react-icons/bs";
import { Button } from "../../Components/common/button-component/button.component";
import {
  handleDateSortingAs,
  handleDateSortingDes,
  handleLikeSorting,
  handleViewSorting,
} from "./../../Core/utils/sorting";
import { useEffect } from "react";

const cardPerRow = 3;

const BlogsPage = () => {
  const [groupBtnList] = useState([
    { id: 1, title: "همه", type: "all" },
    { id: 2, title: "محبوب ترین ها", type: "like" },
    { id: 3, title: "پربازدید ترین ها", type: "view" },
    { id: 4, title: "جدیدترین ها", type: "new" },
    { id: 5, title: "قدیمی ترین ها", type: "old" },
  ]);
  const [nextCard, setNextCard] = useState(cardPerRow);
  const handleMoreCard = () => {
    setNextCard(nextCard + cardPerRow);
  };
  const [blogs] = useState(Data);
  const data = Object.values(blogs);

  const [search, setSearch] = useState("");
  const [filterBlogs, setFilterBlogs] = useState(data);

  const handleSearch = (value) => {
    setSearch(value);
    setFilterBlogs(
      data.filter(
        (item) =>
          item.title.toString().toLowerCase().indexOf(search.toLowerCase()) > -1
      )
    );
  };

  const handleSorting = (type) => {
    switch (type) {
      case "all":
        setFilterBlogs(blogs);
        break;
      case "view":
        setFilterBlogs(handleViewSorting(blogs));
        break;
      case "new":
        setFilterBlogs(handleDateSortingDes(blogs));
        break;
      case "old":
        setFilterBlogs(handleDateSortingAs(blogs));
        break;
      case "like":
        setFilterBlogs(handleLikeSorting(blogs));
        break;
    }
  };

  const fetch = () => {
    setFilterBlogs(data);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch();
    }, 5000);
  }, []);

  const [selectedBlogButton, setSelectedBlogBtn] = useState(
    groupBtnList[0].title
  );

  const handleButton = (title) => {
    setSelectedBlogBtn(title);
  };

  const activeBtn = (item) => {
    const classActive = [];
    classActive.push(
      selectedBlogButton === item
        ? "border-deep-purple text-deep-purple"
        : "border-transparent"
    );
    return classActive.join(" , ");
  };

  const blogSortAndSet = (item) => {
    handleButton(item.title);
    handleSorting(item.type);
  };

  const handleLead = (value) => {
    const trimmedLead =
      value
        .substring(0, 60)
        .substring(0, value.substring(0, 60).lastIndexOf(" ")) + "...";
    return trimmedLead;
  };

  const navigate = useNavigate();

  return (
    <section>
      <div className="container m-auto">
        <div className="grid sm:grid-cols-2 2xl:h-500 xl:h-400 lg:h-400 md:h-250 sm:h-200 h-100">
          <div className="grid h-2/6" data-aos="fade-up">
            <div className="grid">
              <FieldName
                showH2
                title="بخش بلاگ آکادمی بحر"
                classH2Field="2xl:text-7xl 2xl:mb-6 xl:mb-6 xl:text-5xl xl:mr-10 lg:mb-6 lg:text-3xl lg:mr-6 lg:pt-28 md:text-2xl md:mr-4  m-auto md:pt-12 sm:mr-0 sm:pt-12
                dark:text-dark-primary-title"
              />
            </div>
            <div className="text-base mx-2 text-center sm:text-right xl:mr-10 lg:mr-6 md:mr-4 mt-0 m-auto 2xl:text-2xl xl:text-lg lg:text-md md:text-sm sm:mx-0 sm:text-xs text-gray-700 dark:text-dark-text">
              <Typewriter
                words={[
                  "پست‌ها، راهنماها، آموزش‌ها و خبرنامه‌های رایگان برای کمک به شما در یادگیری مهارت‌های مورد تقاضا، استخدام شدن و پیشرفت شغلی.",
                ]}
                cursor
                cursorStyle=" | "
                typeSpeed={40}
                delaySpeed={1000}
              />
            </div>
          </div>
          <div className="sm:block hidden">
            <div className="w-[50%] h-48 2xl:mx-80 xl:mx-64 lg:mx-56 lg:mt-5 md:mx-40 sm:mx-28 drop-shadow-xl shadow-black">
              <img
                data-aos="fade-left"
                src={require("../../Assets/Blog post-amico.svg").default}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-2 m-auto w-11/12 border-b-2 sm:mt-0 mt-20 border-b-[#707070]"
          data-aos="zoom-in-up"
        >
          <h1 className="2xl:text-5xl lg:text-3xl sm:text-xl text-base sm:mt-0 mt-4 dark:text-dark-primary-title">
            برترین های اخیر
          </h1>
          <SearchBar
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="menu-blogs m-auto w-11/12">
          <div className="anim-blogs flex justify-around m-auto text-center h-16 lg:text-lg md:text-md relative">
            <div className="animation-blogs border-deep-purple absolute h-16 top-0 z-0 border-t-4 start-home-blogs duration-300 ease-in-out"></div>
            {groupBtnList.map((item) => {
              return (
                <div
                  onClick={() => blogSortAndSet(item)}
                  className={`anim-div inline-block w-full z-10 sm:pt-4 border-t-4 h-16 dark:text-dark-secondary-title ${activeBtn(
                    item.title
                  )} cursor-pointer`}
                  key={item.id}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid 2xl:grid-cols-3 2xl:gap-20 2xl:mx-auto xl:grid-cols-3 xl:gap-40 xl:ml-48 lg:grid-cols-2 lg:gap-20 lg:mx-auto md:grid-cols-2 md:gap-x-44 md:gap-y-10 md:ml-52 sm:grid-cols-1 sm:gap-20 grid-cols-1 gap-10 ml-60 mt-10 w-[80%]">
          {filterBlogs.length < 0
            ? filterBlogs.slice(0, nextCard).map((card) => (
                <Card
                  showImage
                  showStruc
                  classCard="m-auto text-gray-500 cursor-pointer shadow-lg shadow-[#E5E5E5] rounded-md flex flex-col ease-in-out duration-200 hover:drop-shadow-lg hover:scale-105 hover:shadow-[#E8E3FE] dark:shadow-none dark:bg-dark-secondary"
                  key={card.id}
                  imageUrl={card.image}
                  classImage="rounded-t-lg w-full h-full"
                  classMainImg="m-auto w-full h-72"
                  cardBody="w-80 mx-6 order-last"
                  role={handleLead(card.title)}
                  classRole="text-right h-20 font-bold text-xl text-gray-900 dark:text-dark-text"
                  onClick={() => navigate(`${card.id}`)}
                >
                  <div className="mx-6 my-5">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <BsFillCircleFill className="w-2 text-[#1F18DB]" />
                        <h3 className="text-[#636363] mr-3 dark:text-dark-secondary-title">
                          زمان مطالعه: {card.readTime} دقیقه
                        </h3>
                      </div>
                      <div className="bg-[#F6F6FB] text-[#4C0FFB] px-3 rounded-full self-center">
                        # بهترین
                      </div>
                    </div>
                    <div className="flex items-center">
                      <BsFillCircleFill className="w-2 text-[#DB1818]" />
                      <h3 className="text-[#636363] mr-3 dark:text-dark-secondary-title">
                        {card.date}
                      </h3>
                    </div>
                  </div>
                  <div className="mx-6 order-last mt-10 mb-5">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <img
                          src={require("../../Assets/profile.png")}
                          className="w-10 rounded-full"
                          alt=""
                        />
                        <h3 className="text-[#636363] pr-2 dark:text-dark-secondary-title">
                          {card.people}
                        </h3>
                      </div>
                      <div className="text-[#636363] flex items-center dark:text-dark-secondary-title">
                        <BsHeart className="pb-1" />
                        <h3 className="text-sm">{card.likeCount}</h3>
                        <BsEye className="pb-1" />
                        <h3 className="text-sm">{card.view}</h3>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            : filterBlogs.slice(0, nextCard).map((card) => (
                <div className="w-full" key={card.id}>
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
              ))}
        </div>
        {nextCard < blogs.length && (
          <div className="w-full py-20" data-aos="fade-up">
            <Button
              onClick={handleMoreCard}
              classButton="block p-3 w-40 mx-auto text-2xl text-[#815AE2] outline rounded-xl hover:bg-[#815AE2] hover:text-white ease-in-out duration-300"
            >
              بیشتر
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsPage;
