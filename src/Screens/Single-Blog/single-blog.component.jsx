// import { Button } from "./../../common/button-component/button.component";
import { FieldName } from "../../Components/common/field-name-component/field-name.component";
import { FiClock } from "react-icons/fi";
import { Button } from "../../Components/common/button-component/button.component";

const SingleBlog = () => {
  const lead =
    "محمد تقی بعد از نمونه ازمایش های پی در پی توانست بر امریکا قلبه کند و با بایدن گلف بازی کند";

  const trimmedLead =
    lead.substring(0, 60).substring(0, lead.substring(0, 60).lastIndexOf(" ")) +
    "...";
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-8 mt-5">
        <div className="col-span-5">
          <div className="w-10/12 float-left ml-5 rounded-xl bg-lite-white custom-shadow">
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
                  classPfield="m-auto text-xl pt-3 text-gray-400"
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
                  <h2 className="text-lg ml-10 mt-4">میکائیل محسنی</h2>
                </div>
                <div className="col-span-5 flex justify-between border-r-2 border-deep-purple">
                  <div className="mt-4 mr-3 text-lg">
                    آیا این مطلب براتون مفید بود ؟
                  </div>
                  <div className="">a</div>
                </div>
                <div className="col-span-2 flex justify-between border-r-2 border-deep-purple">
                  <FiClock className="mt-5 mr-5 text-lg text-gray-600" />
                  <span className="mt-4 ml-4 text-gray-600 text-lg">
                    24 تیر 1403
                  </span>
                </div>
              </div>
            </div>
            <div className="h-96 bg-blue-700">e</div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="w-9/12 h-800 ml-auto bg-lite-white custom-shadow rounded-xl">
            <div className="h-16 flex justify-center">
              <h2 className="text-3xl mt-5">اخبار پیشنهادی</h2>
            </div>
            <div className="overflow-y-scroll ml-1 p-1 pr-0 faq-container h-650">
              <div className="h-36 mb-5 grid grid-cols-5 hover:cursor-pointer hover:-translate-x-2 duration-300">
                <div className="col-span-2 rounded-l-2xl bg-blue-400 overflow-hidden">
                  <img
                    className="w-full h-full"
                    src={require("../../Assets/img/react-hooks.png")}
                    alt=""
                  />
                </div>
                <div className="col-span-3">
                  <FieldName
                    showH2
                    showP
                    title="ری اکت"
                    classH2Field="text-2xl pt-3 mr-5 text-gray-700"
                  />
                  <p className="mr-3 text-lg w-52 text-gray-400">
                    {trimmedLead}
                  </p>
                  <div className="col-span-2 w-36 flex justify-between">
                    <FiClock className="mt-3 mr-5 text-lg text-gray-600" />
                    <span className="mt-2 ml-4 text-gray-600 text-lg">
                      24 تیر 1403
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-36 mb-5 bg-yellow-300"></div>
              <div className="h-36 mb-5 bg-yellow-400"></div>
              <div className="h-36 mb-5 bg-yellow-500"></div>
              <div className="h-36 mb-5 bg-yellow-700"></div>
              <div className="h-36 mb-5 bg-yellow-800"></div>
              <div className="h-36 bg-yellow-900"></div>
            </div>
            <div className="h-20 flex justify-center">
              <Button
                classButton="btn w-50 border-b-0 rounded-b-none border-deep-purple duration-300 ease-in-out 
                    text-deep-purple pt-1 pb-3 px-10 text-xl hover:-translate-y-1 mt-10"
              >
                مشاهده عناوین بیشتر
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
