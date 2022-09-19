import React from "react";
import { Button } from "./../../common/button-component/button.component";
import { BsChevronRight } from "react-icons/bs";
import { FaChevronCircleRight } from "react-icons/fa";
import { FieldName } from "./../../common/field-name-component/field-name.component";
import InputFeild from "./../../common/Inputs/TextInputs/InputFeild";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const SignUpThirdPage = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };
  return (
    <div className="flex flex-col w-full mt-6 h-fit animate-[onLoadAnim_2s_ease-in-out]">
      <div className="flex justify-start">
        <Link to="/login">
          <Button classButton="flex items-center text-[#555555]">
            <BsChevronRight className="w-8 text-black text-xl" /> برگشت به صفحه
            ورود
          </Button>
        </Link>
      </div>
      <div className="mx-auto text-center mt-7">
        <FieldName
          showH2
          showP
          title="انتخاب رمز عبور"
          field="حداقل باید دارای 8 نویسه باشد !"
          classH2Field="text-black text-6xl"
          classPfield="text-[#8D8D8D] text-xl mt-2"
        />
      </div>

      <Formik
        initialValues={props.data}
        validationSchema={Yup.object({
          password: Yup.string()
            .required("لطفا رمز عبور خود را وارد کنید")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              "باید شامل 8 نویسه، یک حروف بزرگ، یک عدد و یک نویسه خاص باشد"
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
            <div className="flex flex-col items-center mt-24">
              <InputFeild
                classForm="flex flex-col items-start h-24"
                label="رمز عبور:"
                name="password"
                type="password"
                id="password"
                classInput="sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white rounded-[15px] outline-none duration-300"
                classLabel="text-xl mb-2"
                placeholder="رمز عبور قدرتمند خود را وارد کنید..."
                classError="text-red-500 h-[30px] mb-1 m-auto w-96"
              />
              <InputFeild
                classForm="flex flex-col mt-2 h-24"
                label="تکرار رمز عبور:"
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                classInput="sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white rounded-[15px] outline-none duration-300"
                classLabel="text-xl mb-2"
                placeholder="رمز عبور خود را دوباره وارد کنید..."
                classError="text-red-500 h-[20px] mb-1"
              />
            </div>
            <div className="mt-2 h-14 flex justify-center">
              <Button
                className="bg-button-purple text-white sm:w-96 w-80 text-xl h-12 mt-3 text-center rounded-[15px] hover:button-shadow duration-300 ease-in-out"
                ButtonType="submit"
              >
                تکمیل ثبت نام
              </Button>
            </div>
            <div className="mt-3 m-auto w-[32rem]">
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

export default SignUpThirdPage;
