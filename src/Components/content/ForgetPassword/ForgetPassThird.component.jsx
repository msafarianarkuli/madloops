import React from "react";
import { Button } from "./../../common/button-component/button.component";
import { BsChevronRight } from "react-icons/bs";
import { FaChevronCircleRight } from "react-icons/fa";
import { FieldName } from "./../../common/field-name-component/field-name.component";
import InputFeild from "./../../common/Inputs/TextInputs/InputFeild";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const ForgetPassThirdPage = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <div className="flex flex-col w-[100%] mt-6 mr-4 h-fit">
      <div className="sm:flex sm:justify-start flex justify-center">
        <Button classButton="flex items-center text-[#555555]">
          <BsChevronRight className="w-8 text-black text-xl" /> برگشت به صفحه
          ورود
        </Button>
      </div>
      <div className="mx-auto text-center mt-7">
        <FieldName
          showH2
          showP
          title="رمز عبور جدیدتو وارد کن :)"
          field="توجه ! رمز عبور جدید نباید با رمز عبور پیشین یکسان باشد"
          classH2Field="text-black text-6xl"
          classPfield="text-[#8D8D8D] text-xl mt-2"
        />
      </div>
      <div className="mx-auto mt-10 mb-5">
        <img
          src={require("../../../Assets/img-auth/key-forget-auth.svg").default}
          className="w-20"
          alt=""
        />
      </div>

      <Formik
        initialValues={props.data}
        validationSchema={Yup.object({
          password: Yup.string()
            .required("لطفا رمز عبور خود را وارد کنید")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              "باید شامل 8 نویسه، یک حروف بزرگ و کوچک، یک عدد و یک نویسه خاص باشد"
            ),
          confirmPassword: Yup.string()
            .required("لطفا تکرار رمز عبور خود را وارد کنید")
            .oneOf(
              [Yup.ref("password"), null],
              "رمز عبور باید شبیه رمز عبور وارد شده باشد"
            ),
        })}
        onSubmit={handleSubmit}
      >
        {(values) => (
          <Form>
            <div className="flex flex-col items-center">
              <InputFeild
                classForm="flex flex-col items-start"
                label="رمز عبور جدید:"
                name="password"
                type="password"
                id="password"
                classInput="w-96 p-2 border-2 border-[#B7B7B7] focus:border-2 focus:border-blue-900 bg-white rounded-[15px] outline-0"
                classLabel="text-xl mb-2"
                placeholder="رمز عبور جدید را وارد کنید..."
                classError="text-red-500 h-[30px] mb-1 mr-1 m-auto w-96"
              />
              <InputFeild
                classForm="flex flex-col mt-2"
                label="تکرار رمز عبور جدید:"
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                classInput="w-96 p-2 border-2 border-[#B7B7B7] focus:border-2 focus:border-blue-900 bg-white rounded-[15px] outline-0"
                classLabel="text-xl mb-2"
                placeholder="رمز عبور جدید را دوباره وارد کنید..."
                classError="text-red-500 h-[20px] mb-1 mr-1"
              />
            </div>
            <div className="bg-[#7A58C9] w-96 p-2 text-center rounded-[15px] mx-auto mt-5 hover:bg-white transition duration-500 ease-in-out group">
              <Button
                className="text-white text-xl w-full group-hover:text-deep-purple"
                ButtonType="submit"
              >
                ادامه
              </Button>
            </div>
            <div className="mt-2 m-auto w-[32rem]">
              <Button
                className="flex items-center mr-14"
                onClick={() => props.prev(values)}
              >
                <FaChevronCircleRight
                  className="w-8 text-[#555555]
             rounded-full text-base"
                />
                برگشت به مرحله قبل
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgetPassThirdPage;
