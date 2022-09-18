import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./../../common/button-component/button.component";
import { FieldName } from "./../../common/field-name-component/field-name.component";

const ForgetPassFourthPage = () => {
  return (
    <div className="flex flex-col w-[100%] mt-4 mr-4 h-fit">
      <div className="mx-auto text-center mt-16 animate-[onLoadAnim_2s_ease-in-out]">
        <FieldName
          showH2
          showP
          title="رمز عبور تغییر کرد"
          field="رمز عبور شما با موفقیت تغییر کرد"
          classH2Field="text-[#00C9A3] text-6xl"
          classPfield="text-[#8D8D8D] text-xl mt-2"
        />
      </div>
      <div className="mx-auto 2xl:my-20 lg:my-10">
        <img
          src={
            require("../../../Assets/img-auth/all-done-forgetpass.svg").default
          }
          className="w-52"
          alt=""
        />
      </div>
      <div className="mt-2 h-14 flex justify-center">
        <Link to="/login">
          <Button className="bg-button-purple text-white sm:w-96 w-80 text-xl h-12 mt-4 text-center rounded-[15px] hover:button-shadow duration-300 ease-in-out">
            ادامه
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassFourthPage;
