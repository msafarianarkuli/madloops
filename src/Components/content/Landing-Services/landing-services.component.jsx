import { FieldName } from "../../common/field-name-component/field-name.component";

const LandingServices = () => {
  return (
    <div className="container m-auto">
      <div className="text-center m-auto mt-40 lg:mt-20 md:mt-2 sm:mt-2">
        <FieldName
          showH2
          showP
          classH2Field="text-neutral-900 font-bold sm:text-3xl text-xl m-auto"
          title="خدمات ما"
          classPfield="text-slate-400 sm:text-base text-xs mt-2"
          field="خدماتی در اختیار شما میگذاریم که"
        />

        <div className="xl:bg-lines-dash lg:bg-white bg-no-repeat grid grid-cols-4 h-96 mt-12 lg:mt-36 md:mt-28 sm:mt-28">
          <div className="sm:col-span-1 col-span-2">
            <div className="sm:w-32 sm:h-32 w-28 h-28 xl:mt-14 lg:mt-2 rounded-2xl bg-lite-pink m-auto">
              <img
                className="m-auto sm:pt-8 pt-7 sm:w-16 w-14"
                src={require("../../../Assets/img/certificate.png")}
                alt="certificate"
              />
            </div>
            <FieldName
              showH2
              showP
              classH2Field="font-bold sm:text-lg text-md m-auto mt-4"
              title="مدرک معتبر"
              classPfield="w-36 m-auto mt-3 sm:text-md text-sm text-gray-500"
              field="از طریق مجموعه ما میتونی مدرک معتبر بگیری"
            />
          </div>
          <div className="sm:col-span-1 col-span-2">
            <div className="sm:w-32 sm:h-32 w-28 h-28 xl:mt-14 lg:mt-2 rounded-2xl bg-lite-pink m-auto">
              <img
                className="m-auto sm:sm:pt-8 pt-7 sm:w-16 w-14"
                src={require("../../../Assets/img/opportunity.png")}
                alt="opportunity"
              />
            </div>
            <FieldName
              showH2
              showP
              classH2Field="font-bold sm:text-lg text-md m-auto mt-4"
              title="فرصت شغلی"
              classPfield="w-36 m-auto mt-3 sm:text-md text-sm text-gray-500"
              field="با ارتباط برقرار کردن با ما این فرصت شغلی برات ایجاد میشه"
            />
          </div>
          <div className="sm:col-span-1 col-span-2">
            <div className="sm:w-32 sm:h-32 w-28 h-28 xl:mt-14 lg:mt-2 mt-5 rounded-2xl bg-lite-pink m-auto">
              <img
                className="m-auto sm:pt-8 pt-7 sm:w-16 w-14"
                src={require("../../../Assets/img/online-business.png")}
                alt="opportunity"
              />
            </div>
            <FieldName
              showH2
              showP
              classH2Field="font-bold sm:text-lg text-md m-auto mt-4"
              title="مشاوره"
              classPfield="w-36 m-auto mt-3 sm:text-md text-sm text-gray-500"
              field="اگه جایی برات مبهم بود میتونی با مشاوران ما درمیان بزاری"
            />
          </div>
          <div className="sm:col-span-1 col-span-2">
            <div className="sm:w-32 sm:h-32 w-28 h-28 xl:mt-14 lg:mt-2 mt-5 rounded-2xl bg-lite-pink m-auto">
              <img
                className="m-auto sm:pt-8 pt-7 sm:w-16 w-14"
                src={require("../../../Assets/img/exam.png")}
                alt="opportunity"
              />
            </div>
            <FieldName
              showH2
              showP
              classH2Field="font-bold sm:text-lg text-md m-auto mt-4"
              title="امتحان"
              classPfield="w-36 m-auto mt-3 sm:text-md text-sm text-gray-500"
              field="برای ثبت نام و تعیین سطحت باید یه سری امتحان هارو بدی"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
