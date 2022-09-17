import React from "react";
import { Button } from "./../../common/button-component/button.component";
import { BsChevronRight } from "react-icons/bs";
import { FieldName } from "./../../common/field-name-component/field-name.component";
import InputFeild from "./../../common/Inputs/TextInputs/InputFeild";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const ForgetPassFirstPage = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };
  return (
    <div className="flex flex-col w-[100%] mt-6 mr-4">
      <div>
        <Button classButton="flex items-center text-[#555555]">
          <BsChevronRight className="w-8 text-black text-xl" /> برگشت به صفحه
          ورود
        </Button>
      </div>
      <div className="mx-auto text-center mt-7">
        <FieldName
          showH2
          showP
          title="رمز عبورتو فراموش کردی؟"
          field="نگران نباش :) ما دستورالعمل های بازنشانی را برای شما ارسال میکنیم"
          classH2Field="text-black text-6xl"
          classPfield="text-[#8D8D8D] text-xl mt-2"
        />
      </div>
      <div className="mx-auto mt-10 mb-5">
        <img
          src={require("../../../Assets/img-auth/key-auth.svg").default}
          className="w-20"
          alt=""
        />
      </div>
      <Formik
        initialValues={props.data}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("الگوی وارد شده صحیح نمی باشد")
            .required("لطفا فیلد ایمیل را پر کنید"),
        })}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="flex justify-center h-24">
              <InputFeild
                classForm="flex flex-col"
                label="ایمیل:"
                name="email"
                type="text"
                id="email"
                classInput="w-96 p-2 border-2 border-[#B7B7B7] focus:border-2 focus:border-blue-900 bg-white rounded-[15px] outline-0"
                classLabel="text-xl mb-2"
                placeholder="ایمیل خود را وارد کنید..."
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgetPassFirstPage;
