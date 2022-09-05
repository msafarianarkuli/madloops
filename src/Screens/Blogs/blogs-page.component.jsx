import { FieldName } from "./../../Components/common/field-name-component/field-name.component";

const BlogsPage = () => {
  return (
    <section>
      <div className="container m-auto">
        <div className="grid sm:grid-cols-2 2xl:h-500 xl:h-400 lg:h-400 md:h-250 sm:h-200 h-300">
          <div className="grid h-2/6">
            <div className="grid">
              <FieldName
                showH2
                title="بخش بلاگ آکادمی بحر"
                classH2Field="2xl:text-7xl 2xl:mb-6 xl:mb-6 xl:text-5xl xl:mr-10 lg:mb-6 lg:text-3xl lg:mr-6 lg:pt-28 md:text-2xl md:mr-4  m-auto md:pt-12 sm:mr-0 sm:pt-12"
              />
            </div>
            <div className="grid">
              <FieldName
                showP
                field="پست‌ها، راهنماها، آموزش‌ها و خبرنامه‌های رایگان برای کمک به شما در یادگیری مهارت‌های مورد تقاضا، استخدام شدن و پیشرفت شغلی."
                classPfield="text-base mx-2 text-center sm:text-right xl:mr-10 lg:mr-6 md:mr-4 mt-0 m-auto 2xl:text-2xl xl:text-lg lg:text-md md:text-sm sm:mx-0 sm:text-xs text-gray-700"
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
        <div className="grid grid-cols-2 m-auto w-11/12 border-b-2 border-b-[#707070]">
          <h1>123</h1>
          <h2>search</h2>
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
