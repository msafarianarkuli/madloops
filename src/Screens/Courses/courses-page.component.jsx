import { BsDashLg, BsFilter, BsArrowLeftShort } from 'react-icons/bs';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FieldName } from './../../Components/common/field-name-component/field-name.component';
import { useState, useRef, useContext } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import GroupButton from './../../Components/common/GroupButton/GroupButton';
import { Button } from './../../Components/common/button-component/button.component';
import Data from '../../Core/services/Fake Service/CoursesPage';
import CardGridListView from '../../Components/common/CardGridAndList-view.component';
import GridAndList from './../../Components/common/gridAndList-item.component';
import Accordion from './../../Components/common/Accordion/Accordion';
import { Formik, Form } from 'formik';
import InputGroups from './../../Components/common/Inputs/TextInputs/Input';
import {
  handleDateSortingDes,
  handleLikeSorting,
  handleViewSorting,
} from './../../Core/utils/sorting';
import { ProductsContext } from '../../Core/context/products.context';

const cardPerRow = 3;

const CoursesPage = () => {
  const { products } = useContext(ProductsContext);

  const { filterList } = Data;
  const [showGrid, setShowGrid] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [groupBtnList] = useState([
    { id: 1, title: 'همه', type: 'all' },
    { id: 2, title: 'جدیدترین ها', type: 'new' },
    { id: 3, title: 'محبوب ترین ها', type: 'like' },
    { id: 4, title: 'پربازدید ترین ها', type: 'view' },
  ]);

  const [filterCourses, setFilterCourses] = useState(products);

  const handleSorting = (type) => {
    switch (type) {
      case 'all':
        setFilterCourses(products);
        break;
      case 'view':
        setFilterCourses(handleViewSorting(products));
        break;
      case 'new':
        setFilterCourses(handleDateSortingDes(products));
        break;
      case 'like':
        setFilterCourses(handleLikeSorting(products));
        break;
    }
  };

  const [nextCard, setNextCard] = useState(cardPerRow);
  const handleMoreCard = () => {
    setNextCard(nextCard + cardPerRow);
  };

  const [filteredItem, setFilteredItem] = useState(filterList);

  const SideRightRef = useRef();

  const closeSideRight = (e) => {
    if (SideRightRef.current === e.target) {
      setOpenFilter(false);
    }
  };
  return (
    <section>
      <div className="container m-auto ">
        <div className="grid sm:grid-cols-2 2xl:h-500 xl:h-400 lg:h-400 md:h-250 sm:h-200 h-200">
          <div className="grid h-2/6">
            <div className="grid">
              <FieldName
                showH2
                title="دوره های آکادمی بحر"
                classH2Field="2xl:text-7xl 2xl:mb-6 xl:mb-6 xl:text-5xl xl:mr-10 lg:mb-6 lg:text-3xl lg:mr-6 lg:pt-28 
                md:text-2xl md:mr-4 m-auto md:pt-12 sm:mr-0 sm:pt-12 dark:text-dark-primary-title"
              />
            </div>
            <div
              className="text-base mx-2 text-center sm:text-right xl:mr-10 lg:mr-6 md:mr-4 mt-0
             m-auto 2xl:text-2xl xl:text-lg lg:text-md md:text-sm sm:mx-0 sm:text-xs text-gray-700 dark:text-dark-text"
            >
              <Typewriter
                words={[
                  'یک دوره آکادمی بحر برای هر مرحله از حرفه شما وجود دارد. از بوت‌کمپ‌های کدنویسی که افراد مبتدی مطلق را از صفر تا استخدام می‌کنند، تا دوره‌های پیشرفته‌ای که متخصصان با تجربه برای ارتقاء مهارت و پیشرفت شغلی خود از آنها استفاده می‌کنند',
                ]}
                cursor
                cursorStyle=" | "
                typeSpeed={40}
                delaySpeed={1000}
              />
            </div>
          </div>
          <div className="sm:block hidden">
            <div className="w-[50%] h-48 2xl:mx-80 xl:mx-64 lg:mx-56 lg:mt-5 md:mx-40 sm:mx-40 drop-shadow-xl shadow-black">
              <img
                src={
                  require('../../Assets/Online learning-amico.svg')
                    .default
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex lg:justify-around sm:justify-evenly text-center lg:mt-0 sm:mt-5">
          <div className="bg-[#F6F6FB] w-80 h-40 rounded-sm dark:bg-dark-secondary">
            <div className="text-[#C53F3F] text-4xl mt-6">
              {filterCourses.reduce((a, b) => a + b.lesson, 0)}+
            </div>
            <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
            <div className="text-[#675F74] text-3xl dark:text-dark-text">
              درس{' '}
            </div>
          </div>
          <div className="bg-[#F6F6FB] w-80 h-40 rounded-sm dark:bg-dark-secondary">
            <div className="text-[#C53F3F] text-4xl mt-6">
              {filterCourses.reduce((a, b) => a + b.hour, 0)}+
            </div>
            <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
            <div className="text-[#675F74] text-3xl dark:text-dark-text">
              ساعت{' '}
            </div>
          </div>
          <div className="bg-[#F6F6FB] w-80 h-40 rounded-sm dark:bg-dark-secondary">
            <div className="text-[#C53F3F] text-4xl mt-6">
              {filterCourses.length}+
            </div>
            <BsDashLg className="text-[#373F49] w-20 text-4xl mx-auto" />
            <div className="text-[#675F74] text-3xl dark:text-dark-text">
              دوره{' '}
            </div>
          </div>
        </div>
        <div className="mt-32 relative">
          <h2
            className="text-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-base
           bg-white text-[#675F74] sm:w-2/6 w-3/6 absolute -top-4 right-[25%]
            md:-top-7 sm:-top-5 sm:right-[34%] dark:bg-dark-primary dark:text-dark-primary-title"
          >
            در میان دوره ها کاوش کنید
          </h2>
          <div className="flex justify-around m-auto border-2 border-[#D9D9D9] 2xl:w-[88%] lg:w-[94%] md:w-[98%] sm:w-[100%] h-36 rounded-2xl">
            <div
              className="m-auto p-2 sm:rounded-lg rounded-[10px] flex border-2 border-[#5DC8B2] transition ease-in-out duration-200 cursor-pointer hover:bg-[#5DC8B2] group"
              onClick={() => setOpenFilter(!openFilter)}
            >
              <h2 className="lg:text-xl md:text-2xl sm:text-base text-sm text-[#373F49] group-hover:text-white dark:text-dark-primary-title">
                فیلتر
              </h2>
              <BsFilter className="lg:text-3xl md:text-3xl sm:text-2xl text-2xl text-[#373F49] group-hover:text-white dark:text-dark-primary-title" />
            </div>
            <div className="m-auto">
              <GroupButton
                onSorting={handleSorting}
                items={groupBtnList}
                width="sm:text-base sm:w-fit sm:p-fit"
              />
            </div>

            <GridAndList
              showGrid={showGrid}
              setShowGrid={setShowGrid}
            />
          </div>
        </div>
        <div
          className={
            !showGrid
              ? 'grid 2xl:grid-cols-3 2xl:gap-20 2xl:mx-auto xl:grid-cols-3 xl:gap-x-40 xl:ml-48 lg:grid-cols-2 lg:gap-20 lg:mx-auto md:grid-cols-2 md:gap-x-44 md:gap-y-10 md:ml-52 sm:grid-cols-1 sm:mx-auto sm:gap-20 grid-cols-1 gap-10 mt-10 w-[80%]'
              : 'sm:my-20 sm:mx-auto sm:w-10/12 grid-cols-1 gap-10 mt-10 w-[80%]'
          }
        >
          {filterCourses.slice(0, nextCard).map((item) => (
            <CardGridListView
              item={item}
              key={item.id}
              view={showGrid}
            />
          ))}
        </div>
        {nextCard < filterCourses.length && (
          <div className="w-full my-20">
            <Button
              onClick={handleMoreCard}
              classButton="block p-3 w-40 mx-auto text-2xl text-[#815AE2] outline rounded-xl hover:bg-[#815AE2] hover:text-white ease-in-out duration-300"
            >
              بیشتر
            </Button>
          </div>
        )}
        <div
          ref={SideRightRef}
          onClick={closeSideRight}
          className="fixed top-0 right-0 w-full z-50 bg-gray-600 bg-opacity-80"
        >
          <div
            className={`${
              openFilter
                ? 'bg-deep-purple h-screen pt-8 w-80 z-50 relative'
                : 'w-0 z-0'
            } duration-300 ease-in-out relative top-0 right-0`}
          >
            {openFilter && (
              <div className="h-5/6 overflow-y-scroll fixed-container ml-2">
                {filteredItem.map((filter) => (
                  <Accordion
                    key={filter.id}
                    item={filter}
                    items={filteredItem}
                    setItems={setFilteredItem}
                    dir="rtl"
                    headerActiveStyle="border-b-0 rounded-bl-none rounded-br-none"
                    headerInactiveStyle="border-b-2 rounded-bl-xl rounded-br-xl delay-[300ms]"
                    headerMainStyle="m-auto p-4 bg-white border-t-2 border-r-2 border-l-2 border-gray-200 w-10/12
                    rounded-tl-xl rounded-tr-xl"
                    bodyMainStyle="mx-auto w-10/12 px-2 bg-white rounded-bl-xl rounded-br-xl border-r-2 border-l-2"
                    bodyActiveStyle="max-h-[100rem] overflow-hidden transition-[max-height] ease-in-out duration-300"
                    bodyInactiveStyle="max-h-[0rem] overflow-hidden transition-[max-height] ease-in-out duration-300"
                    activeIcon={<FaMinus />}
                    inactiveIcon={<FaPlus />}
                  >
                    <Formik
                      initialValues={{
                        checkbox: '',
                      }}
                    >
                      <Form>
                        {filter.filterServices?.map((item) => {
                          return (
                            <div className="m-auto" key={item.id}>
                              <label
                                className="flex flex-row-reverse justify-end py-1 leading-[25px] items-center cursor-pointer"
                                htmlFor="checkbox"
                              >
                                ({item.total}) ,
                                {item.title
                                  ? item.title
                                  : item.rate
                                  ? item.rate
                                  : item.start}
                                {item.end}
                                <InputGroups
                                  type="checkbox"
                                  name="checkbox"
                                  id="checkbox"
                                  className="inline-block w-10 h-5"
                                />
                              </label>
                            </div>
                          );
                        })}
                      </Form>
                    </Formik>
                  </Accordion>
                ))}
                <div className="w-full bg-deep-purple p-4 absolute bottom-0">
                  <Button
                    onClick={() => setOpenFilter(false)}
                    classButton="w-full text-black bg-white p-4 rounded-xl text-2xl hover:opacity-75 transition duration-500"
                  >
                    ثبت
                  </Button>
                </div>
              </div>
            )}

            {openFilter && (
              <BsArrowLeftShort
                className={`bg-white text-deep-purple rounded-full border-2
              border-deep-purple text-4xl absolute p-1 -left-4 top-4 cursor-pointer rotate-180`}
                onClick={() => setOpenFilter(!openFilter)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
