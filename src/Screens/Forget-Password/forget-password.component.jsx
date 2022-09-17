import React, { useState } from "react";
import ForgetPassFirstPage from "./../../Components/content/ForgetPassword/ForgetPassFirst.component";
import ForgetPassSecondPage from "./../../Components/content/ForgetPassword/ForgetPassSecond.component";
import ForgetPassThirdPage from "./../../Components/content/ForgetPassword/ForgetPassThird.component";
import ForgetPassFourthPage from "./../../Components/content/ForgetPassword/ForgetPassFourth.component";
import AuthRightSkill from "../../Components/common/AuthRightSkill.component";

const ForgetPasswordPage = () => {
  const [data, setData] = useState({
    email: "",
    text: "",
    password: "",
    confirmPassword: "",
  });

  const [currentPage, setCurrentPage] = useState(0);

  const setToReaquest = (formData) => {
    console.log("Form Submitted", formData);
  };

  const handleNextPage = (newData, finalPage = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    setCurrentPage((prev) => prev + 1);

    if (finalPage) {
      return setToReaquest(newData);
    }
  };

  const handlePrevPage = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentPage((prev) => prev - 1);
  };

  const stepsPage = [
    <ForgetPassFirstPage data={data} next={handleNextPage} />,
    <ForgetPassSecondPage
      data={data}
      next={handleNextPage}
      prev={handlePrevPage}
    />,
    <ForgetPassThirdPage
      data={data}
      next={handleNextPage}
      prev={handlePrevPage}
    />,
    <ForgetPassFourthPage data={data} next={handleNextPage} />,
  ];

  return (
    <div className="m-auto w-screen h-screen sm:flex sm:flex-row">
      <AuthRightSkill currentPage={currentPage} />
      {stepsPage[currentPage]}
    </div>
  );
};

export default ForgetPasswordPage;
