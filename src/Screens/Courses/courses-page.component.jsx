import { BsDashLg, BsFilter } from "react-icons/bs";
import { FieldName } from "./../../Components/common/field-name-component/field-name.component";
import { useState } from "react";
import GroupButton from "./../../Components/common/GroupButton/GroupButton";
import { Button } from "./../../Components/common/button-component/button.component";
import Data from "../../Core/services/Fake Service/CoursesPage";
import CardGridListView from "../../Components/common/CardGridAndList-view.component";
import GridAndList from "./../../Components/common/gridAndList-item.component";

const CoursesPage = () => {
  const { courses } = Data;
  const [showGrid, setShowGrid] = useState(false);
  const [groupBtnList] = useState([
    "همه",
    "جدیدترین ها",
    "محبوب ترین ها",
    "پربازدید ترین ها",
  ]);
  return (
    <section>
      <div className="container m-auto">
        <div className="grid sm:grid-cols-2 2xl:h-500 xl:h-400 lg:h-400 md:h-250 sm:h-200 h-300">
          <div className="grid h-2/6">
            <div className="grid">
              <FieldName
                showH2
                title="دوره های آکادمی بحر"
                classH2Field="2xl:text-7xl 2xl:mb-6 xl:mb-6 xl:text-5xl xl:mr-10 lg:mb-6 lg:text-3xl lg:mr-6 lg:pt-28 md:text-2xl md:mr-4  m-auto md:pt-12 sm:mr-0 sm:pt-12"
              />
            </div>
            <div className="grid">
              <FieldName
                showP
                field="یک دوره آکادمی بحر برای هر مرحله از حرفه شما وجود دارد. از بوت‌کمپ‌های کدنویسی که افراد مبتدی مطلق را از صفر تا استخدام می‌کنند، تا دوره‌های پیشرفته‌ای که متخصصان با تجربه برای ارتقاء مهارت و پیشرفت شغلی خود از آنها استفاده می‌کنند"
                classPfield="text-base mx-2 text-center sm:text-right xl:mr-10 lg:mr-6 md:mr-4 mt-0 m-auto 2xl:text-2xl xl:text-lg lg:text-md md:text-sm sm:mx-0 sm:text-xs text-gray-700"
              />
            </div>
          </div>
          <div className="sm:block hidden">
            <div className="w-[50%] h-48 2xl:mx-80 xl:mx-64 lg:mx-56 lg:mt-5 md:mx-40 sm:mx-40 drop-shadow-xl shadow-black">
              <img
                src={require("../../Assets/Online learning-amico.svg").default}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex lg:justify-around sm:justify-evenly text-center lg:mt-0 sm:mt-5 mt-10">
          <div className="bg-[#F6F6FB] w-80 h-40 rounded-sm">
            <div className="text-[#C53F3F] text-4xl mt-6">8452+</div>
            <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
            <div className="text-[#675F74] text-3xl">درس ها</div>
          </div>
          <div className="bg-[#F6F6FB] w-80 h-40 rounded-sm">
            <div className="text-[#C53F3F] text-4xl mt-6">800+</div>
            <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
            <div className="text-[#675F74] text-3xl">ساعت ها</div>
          </div>
          <div className="bg-[#F6F6FB] w-80 h-40 rounded-sm">
            <div className="text-[#C53F3F] text-4xl mt-6">90+</div>
            <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
            <div className="text-[#675F74] text-3xl">دوره ها</div>
          </div>
        </div>
        <div className="mt-32 relative">
          <h2 className="text-center 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base bg-white text-[#675F74] sm:w-2/6 w-3/6 absolute -top-4 right-[25%]  md:-top-7 sm:-top-5 sm:right-[34%]">
            در میان دوره ها کاوش کنید
          </h2>
          <div className="flex justify-around m-auto border-2 border-[#D9D9D9] 2xl:w-[88%] lg:w-[94%] md:w-[98%] sm:w-[100%] h-40 rounded-[25px]">
            <div className="m-auto p-3 sm:rounded-[20px] rounded-[10px] flex border-2 border-[#5DC8B2] transition ease-in-out duration-200 cursor-pointer hover:bg-[#5DC8B2] group">
              <h2 className="lg:text-4xl md:text-3xl sm:text-base text-sm text-[#373F49] group-hover:text-white">
                فیلتر
              </h2>
              <BsFilter className="lg:text-5xl md:text-4xl sm:text-2xl text-xl text-[#373F49] group-hover:text-white" />
            </div>
            <div className="m-auto">
              <GroupButton
                items={groupBtnList}
                width="xl:p-6 xl:w-52 lg:w-36 lg:p-[22px] md:w-28 md:p-[7px] sm:w-[105px] sm:p-[3px]"
              />
            </div>

            <GridAndList showGrid={showGrid} setShowGrid={setShowGrid} />
          </div>
        </div>
        <div
          className={
            !showGrid
              ? "grid 2xl:grid-cols-3 2xl:gap-20 2xl:mx-auto xl:grid-cols-3 xl:gap-x-40 xl:ml-48 lg:grid-cols-2 lg:gap-20 lg:mx-auto md:grid-cols-2 md:gap-x-44 md:gap-y-10 md:ml-52 sm:grid-cols-1 sm:mx-auto sm:gap-20 grid-cols-1 gap-10 mt-10 w-[80%]"
              : "sm:mt-20 sm:mx-auto sm:w-10/12 grid-cols-1 gap-10 mt-10 w-[80%]"
          }
        >
          {courses
            .filter((item, idx) => idx < 6)
            .map((item) => (
              <CardGridListView item={item} key={item.id} view={showGrid} />
            ))}
        </div>
        <div className="w-full my-20">
          <Button classButton="block p-3 w-40 mx-auto text-2xl text-[#815AE2] outline rounded-xl hover:bg-[#815AE2] hover:text-white transition ease-in-out delay-150">
            بیشتر
          </Button>
        </div>
        {/* <div className="my-52">
          <Accordion />
        </div> */}
      </div>
    </section>
  );
};

export default CoursesPage;
