import { FieldName } from "../../common/field-name-component/field-name.component";

const LandingServices = () => {
  return (
    <div className="container m-auto">
      <div className="text-center m-auto mt-20">
        <FieldName
          showH2
          showP
          classH2Field="text-neutral-900 font-bold sm:text-3xl text-xl m-auto"
          title="خدمات ما"
          classPfield="text-slate-400 sm:text-base text-xs mt-2"
          field="خدماتی در اختیار شما میگذاریم که"
        />

        <div className="bg-lines-dash bg-no-repeat grid grid-cols-4 h-96 mt-44">
          <div className="col-span-1">
            <div className="xl:w-32 xl:h-32 xl:mt-14 lg:w-32 lg:h-32 lg:mt-10 rounded-2xl bg-lite-pink m-auto">
              <img
                className="m-auto pt-8 w-16"
                src={require("../../../Assets/img/certificate.png")}
                alt="certificate"
              />
            </div>
            <FieldName
              showH2
              showP
              classH2Field="font-bold text-lg m-auto mt-4"
              title="مدرک معتبر"
              classPfield="w-36 m-auto mt-3 text-gray-500"
              field="از طریق مجموعه ما میتونی مدرک معتبر بگیری"
            />
          </div>
          <div className="col-span-1 ">
            <div className="xl:w-32 xl:h-32 xl:mt-14 lg:w-32 lg:h-32 lg:mt-1 rounded-2xl bg-lite-pink m-auto">
              <img
                className="m-auto pt-8 w-16"
                src={require("../../../Assets/img/opportunity.png")}
                alt="opportunity"
              />
            </div>
            <FieldName
              showH2
              showP
              classH2Field="font-bold text-lg m-auto mt-4"
              title="فرصت شغلی"
              classPfield="w-36 m-auto mt-3 text-gray-500"
              field="با ارتباط برقرار کردن با ما این فرصت شغلی برات ایجاد میشه"
            />
          </div>
          <div className="col-span-1 ">
            <div className="w-32 h-32 rounded-2xl mt-10 bg-lite-pink m-auto">
              <img
                className="m-auto pt-8 w-16"
                src={require("../../../Assets/img/online-business.png")}
                alt="opportunity"
              />
            </div>
            <FieldName
              showH2
              showP
              classH2Field="font-bold text-lg m-auto mt-4"
              title="مشاوره"
              classPfield="w-36 m-auto mt-3 text-gray-500"
              field="اگه جایی برات مبهم بود میتونی با مشاوران ما درمیان بزاری"
            />
          </div>
          <div className="col-span-1 ">
            <div className="w-32 h-32 rounded-2xl mt-20 bg-lite-pink m-auto">
              <img
                className="m-auto pt-8 w-16"
                src={require("../../../Assets/img/exam.png")}
                alt="opportunity"
              />
            </div>
            <FieldName
              showH2
              showP
              classH2Field="font-bold text-lg m-auto mt-4"
              title="امتحان"
              classPfield="w-36 m-auto mt-3 text-gray-500"
              field="برای ثبت نام و تعیین سطحت باید یه سری امتحان هارو بدی"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
