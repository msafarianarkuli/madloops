import React from "react";
import { Link } from "react-router-dom";
import AnimateSignUpSvg from "../../common/Animate-SignUp-SVG/animate-signup-svg.component";
import { Button } from "../../common/button-component/button.component";
import { FieldName } from "./../../common/field-name-component/field-name.component";

const SignUpFourthPage = () => {
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-1 h-screen relative">
        <div className="col-span-1 mx-auto text-center h-24 mt-10 animate-[onLoadAnim_1.5s_ease-in-out]">
          <FieldName
            showH2
            showP
            title="ثبت نام انجام شد"
            field="موفق باشید"
            classH2Field="text-[#00C9A3] sm:text-6xl text-5xl"
            classPfield="text-[#8D8D8D] text-xl mt-2"
          />
        </div>
        <div className="col-span-1 flex justify-centerّ h-40">
          <AnimateSignUpSvg/>
        </div>
        <div className="col-span-1 mt-2 h-14 flex justify-center">
          <Link to="/">
            <Button className="bg-button-purple text-white sm:w-96 w-80 text-xl h-12 mt-4 text-center rounded-xl hover:button-shadow duration-300 ease-in-out">
              ادامه
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpFourthPage;
