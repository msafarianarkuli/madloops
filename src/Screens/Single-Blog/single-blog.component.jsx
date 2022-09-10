// import { Button } from "./../../common/button-component/button.component";
import { FieldName } from "../../Components/common/field-name-component/field-name.component";
import { FiClock } from "react-icons/fi";

const SingleBlog = () => {
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-8 mt-5">
        <div className="col-span-5">
          <div className="w-10/12 m-auto rounded-xl shadow-xl">
            <div className="h-96">
              <img
                className="rounded-t-xl w-full h-96"
                src={require("../../Assets/img/react-hooks.png")}
                alt="react-hooks"
              />
            </div>
            <div className="h-16">
              <div className="flex justify-center">
                <FieldName showH2 title="ری اکت" classH2Field="text-3xl pt-3" />
              </div>
            </div>
            <div className="h-72">
              <div className="w-10/12 m-auto">
                <FieldName
                  showP
                  field="آموزش پروژه محور انگولار اولین دوره از سری دوره های هیولاشو و پروژه محور در وبسایت ggg است. جاوا اسکریپت محبوب ترین و پرکاربردترین زبان برنامه نویسی سال ۲۰۲۰ است و مطمئنا بخش زیادی از بازار کار فعلی و آینده ایران و جهان را به خودش اختصاص داده، در این آموزش پروژه محور angular با ۱۰ پروژه حرفه ای و متفاوت دوره را شروع میکنیم و تا این تاریخ که من در حال ضبط دوره هستم، سطح دوره و پروژه های کار شده در هیج آموزش جاوااسکریپت فارسی وجود ندارد. در دوره هیولای جاوااسکریپت همه مباحث جاوااسکریپت به صورت پروژه محور و کاربردی آموزش داده میشه تا شما عزیزان مطابق با نیاز با بازاز کار، نمونه کار حرفه ای داشته باشید. (حالا باید فهمیده باشید چرا اسم دوره رو گذاشتم هیولای جاوااسکریپت)"
                  classPfield="m-auto text-lg pt-3 text-gray-400"
                />
              </div>
            </div>
            <div className="h-16">
              <div className="w-11/12 m-auto grid grid-cols-10 border-2 border-deep-purple rounded-xl">
                <div className="col-span-3 flex justify-between">
                  <span className="">
                    <img
                      className="w-10 m-2 mr-5"
                      src={require("../../Assets/img/profile.png")}
                      alt="profile"
                    />
                  </span>
                  <h2 className="text-lg ml-5 mt-3">
                    میکائیل محسنی
                  </h2>
                </div>
                <div className="col-span-5 flex justify-between border-r-2 border-deep-purple">
                  <div className="mt-3 mr-3 text-md">
                    آیا این مطلب براتون مفید بود ؟
                  </div>
                  <div className="">a</div>
                </div>
                <div className="col-span-2 flex justify-between border-r-2 border-deep-purple">
                  <div className="">
                    <FiClock className="mt-5 mr-5 text-lg text-gray-600" />
                  </div>
                  <div className="mt-4 ml-4 text-gray-600"><span>24 تیر 1403</span></div>
                </div>
              </div>
            </div>
            <div className="h-96 bg-blue-700">e</div>
          </div>
        </div>
        <div className="col-span-3 bg-red-500">
          <div className="w-9/12 h-800 m-auto bg-purple-300 rounded-xl">
            <div className="h-20 flex justify-center">
                <h2 className="text-2xl mt-5">اخبار پیشنهادی</h2>
            </div>
            <div className="bg-purple-700">
              <div className="h-32 bg-yellow-200"></div>
              <div className="h-32 bg-yellow-300"></div>
              <div className="h-32 bg-yellow-400"></div>
              <div className="h-32 bg-yellow-500"></div>
              <div className="h-32 bg-yellow-600"></div>
            </div>
            <div className="h-20 bg-purple-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
