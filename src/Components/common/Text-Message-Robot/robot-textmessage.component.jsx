import React from "react";

const RobotTextMessage = () => {
  return (
    <div className="mr-4 relative">
      <div className="lg:w-60 w-52 absolute top-[-400px] bg-lite-violet dark:bg-[#5DC8B2] dark:text-dark-primary p-2 pr-4 z-10 rounded-t-full rounded-r-full animate-[onLoadTextOne_5s_ease-in-out] duration-300">
        <h2 className="lg:text-xl text-lg">سلام، به سایت ما خوش اومدی</h2>
      </div>
      <div className="lg:w-60 w-52 absolute top-[-400px] bg-lite-violet dark:bg-[#5DC8B2] dark:text-dark-primary p-2 pr-5 z-20 rounded-t-full rounded-r-full animate-[onLoadTextTwo_7s_ease-in-out] duration-300">
        <h2 className="lg:text-xl text-lg">اینجا هر دوره ای بخوای هست</h2>
      </div>
      <div className="lg:w-60 w-52 absolute top-[-400px] bg-lite-violet dark:bg-[#5DC8B2] dark:text-dark-primary p-2 pr-5 z-30 rounded-t-full rounded-r-full animate-[onLoadTextThree_9s_ease-in-out] duration-300">
        <h2 className="lg:text-xl text-lg">با خبر های روز تکنولوژی دنیا</h2>
      </div>
      <div className="lg:w-72 w-64 absolute top-[-400px] bg-lite-violet dark:bg-[#5DC8B2] dark:text-dark-primary p-2 pr-4 z-40 rounded-t-3xl -right-12 rounded-r-3xl animate-[onLoadTextFour_13s_ease-in-out] duration-300">
        <h2 className="lg:text-xl text-lg">اگه سوالی داشتی میتونی تو چت آنلاین با ما به اشتراک بزاری</h2>
      </div>
    </div>
  );
};

export default RobotTextMessage;
