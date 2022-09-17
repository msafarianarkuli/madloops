import React from "react";
import { Button } from "./../../common/button-component/button.component";
import { BsChevronRight } from "react-icons/bs";
import { FaChevronCircleRight } from "react-icons/fa";
import { FieldName } from "./../../common/field-name-component/field-name.component";
import InputFeild from "./../../common/Inputs/TextInputs/InputFeild";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const SignUpSecondPage = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div className="flex flex-col w-[100%] mt-6 mr-4 h-fit">
      <div className="flex justify-start">
        <Button classButton="flex items-center text-[#555555]">
          <BsChevronRight className="w-8 text-black text-xl" /> برگشت به صفحه
          ورود
        </Button>
      </div>
      <div className="mx-auto text-center mt-7">
        <FieldName
          showH2
          showP
          title="ثبت اطلاعات شخصی"
          field="اطلاعات شخصی خود را ثبت کنید !"
          classH2Field="text-black text-6xl"
          classPfield="text-[#8D8D8D] text-xl mt-2"
        />
      </div>

      <Formik
        initialValues={props.data}
        validationSchema={Yup.object({
          nationalId: Yup.number()
            .required("لطفا فیلد شماره ملی را وارد کنید")
            .typeError("شماره ملی خود را صحیح وارد کنید")
            .positive("شماره ملی نمی تواند با منها شروع شود")
            .integer("شماره ملی نمی‌ تواند شامل اعشار باشد")
            .min(99999, "شماره ملی نباید از 5 رقم کمتر باشد")
            .max(9999999999, "شماره ملی نباید از 10 رقم بیشتر باشد"),

          phoneNumber: Yup.number()
            .typeError("شماره تلفن خود را صحیح وارد کنید")
            .positive("شماره تلفن نمی تواند با منها شروع شود")
            .integer("شماره تلفن نمی‌ تواند شامل اعشار باشد")
            .max(
              9999999999,
              "شماره تماس وارد شده نمیتواند بیشتر از 11 رقم باشد"
            )
            .required("لطفا فیلد شماره تماس را پر کنید"),

          birthDate: Yup.string()
            .required("لطفا فیلد تاریخ تولد را پر کنید")
            .matches(
              /^[1-4]\d{3}\/((0[1-6]\/((3[0-1])|([1-2][0-9])|(0[1-9])))|((1[0-2]|(0[7-9]))\/(30|([1-2][0-9])|(0[1-9]))))$/,
              "تاریخ وارد شده صحیح نیست"
            ),
        })}
        onSubmit={handleSubmit}
      >
        {(values) => (
          <Form>
            <div className="flex flex-col items-center mt-16">
              <InputFeild
                classForm="flex flex-col items-start"
                label="شماره ملی:"
                name="nationalId"
                type="text"
                id="nationalId"
                classInput="w-96 p-2 border-2 border-[#B7B7B7] focus:border-2 focus:border-blue-900 bg-white rounded-[15px] outline-0"
                classLabel="text-xl mb-2"
                placeholder="شماره ملی خود را وارد کنید..."
                classError="text-red-500 h-[20px] mb-1 mr-1"
              />
              <InputFeild
                classForm="flex flex-col mt-2"
                label="شماره همراه:"
                name="phoneNumber"
                type="text"
                id="phoneNumber"
                classInput="w-96 p-2 border-2 border-[#B7B7B7] focus:border-2 focus:border-blue-900 bg-white rounded-[15px] outline-0"
                classLabel="text-xl mb-2"
                placeholder="شماره همراه خود را وارد کنید..."
                classError="text-red-500 h-[20px] mb-1 mr-1"
              />
              <InputFeild
                classForm="flex flex-col mt-2"
                label="تاریخ تولد:"
                name="birthDate"
                type="text"
                id="birthDate"
                classInput="w-96 p-2 border-2 border-[#B7B7B7] focus:border-2 focus:border-blue-900 bg-white rounded-[15px] outline-0"
                classLabel="text-xl mb-2"
                placeholder="تاریخ تولد خود را وارد کنید..."
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

export default SignUpSecondPage;
