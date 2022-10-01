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

const cardPerRow = 3;

const BlogsPage = () => {
  const { blogs } = Data;
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
          <div className="grid h-2/6">
            <div className="grid">
              <FieldName
                showH2
                title="بخش بلاگ آکادمی بحر"
                classH2Field="2xl:text-7xl 2xl:mb-6 xl:mb-6 xl:text-5xl xl:mr-10 lg:mb-6 lg:text-3xl lg:mr-6 lg:pt-28 md:text-2xl md:mr-4  m-auto md:pt-12 sm:mr-0 sm:pt-12"
              />
            </div>
            <div className="text-base mx-2 text-center sm:text-right xl:mr-10 lg:mr-6 md:mr-4 mt-0 m-auto 2xl:text-2xl xl:text-lg lg:text-md md:text-sm sm:mx-0 sm:text-xs text-gray-700">
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
                src={require("../../Assets/Blog post-amico.svg").default}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 m-auto w-11/12 border-b-2 sm:mt-0 mt-20 border-b-[#707070]">
          <h1 className="2xl:text-5xl lg:text-3xl sm:text-xl text-base sm:mt-0 mt-4">
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
                  className={`anim-div inline-block w-full z-10 sm:pt-4 border-t-4 h-16 ${activeBtn(
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
          {filterBlogs.slice(0, nextCard).map((card) => (
            <Card
              showImage
              showStruc
              classCard="m-auto text-gray-500 cursor-pointer shadow-lg shadow-[#E5E5E5] hover:shadow-lg hover:shadow-[#815AE2] transition ease-in-out duration-500 rounded-md flex flex-col"
              key={card.id}
              imageUrl={card.image}
              classImage="rounded-t-lg w-full h-full"
              classMainImg="m-auto w-full h-72"
              cardBody="w-80 mx-6 order-last"
              role={handleLead(card.title)}
              classRole="text-right h-20 font-bold text-xl text-gray-900"
              onClick={() => {
                navigate(`${card.id}`);
                console.log(card.id);
              }}
            >
              <div className="mx-6 my-5">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <BsFillCircleFill className="w-2 text-[#1F18DB]" />
                    <h3 className="text-[#636363] mr-3">
                      زمان مطالعه: {card.readTime} دقیقه
                    </h3>
                  </div>
                  <div className="bg-[#F6F6FB] text-[#4C0FFB] px-3 rounded-full self-center">
                    # بهترین
                  </div>
                </div>
                <div className="flex items-center">
                  <BsFillCircleFill className="w-2 text-[#DB1818]" />
                  <h3 className="text-[#636363] mr-3">{card.date}</h3>
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
                    <h3 className="text-[#636363] pr-2">{card.people}</h3>
                  </div>
                  <div className="text-[#636363] flex items-center">
                    <BsHeart className="pb-1" />
                    <h3 className="text-sm">{card.likeCount}</h3>
                    <BsEye className="pb-1" />
                    <h3 className="text-sm">{card.view}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {nextCard < blogs.length && (
          <div className="w-full my-20">
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
