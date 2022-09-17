import React, { useState } from "react";
import SignUpFirstPage from "./../../Components/content/SignUp/sign-up-first.component";
import SignUpSecondPage from "./../../Components/content/SignUp/sign-up-second.component";
import SignUpThirdPage from "./../../Components/content/SignUp/sign-up-third.component";
import SignUpFourthPage from "./../../Components/content/SignUp/sign-up-fourth.component";
import AuthRightSkill from "../../Components/common/AuthRightSkill.component";

const SignUpPage = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nationalId: "",
    phoneNumber: "",
    birthDate: "",
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
    <SignUpFirstPage data={data} next={handleNextPage} />,
    <SignUpSecondPage
      data={data}
      next={handleNextPage}
      prev={handlePrevPage}
    />,
    <SignUpThirdPage data={data} next={handleNextPage} prev={handlePrevPage} />,
    <SignUpFourthPage data={data} next={handleNextPage} />,
  ];

  return (
    <div className="m-auto w-screen h-screen sm:flex sm:flex-row">
      <AuthRightSkill currentPage={currentPage} />
      {stepsPage[currentPage]}
    </div>
  );
};

export default SignUpPage;
