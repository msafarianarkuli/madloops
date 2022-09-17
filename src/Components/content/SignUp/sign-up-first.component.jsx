import React from "react";
import { Button } from "./../../common/button-component/button.component";
import { BsChevronRight } from "react-icons/bs";
import { FieldName } from "./../../common/field-name-component/field-name.component";
import InputFeild from "./../../common/Inputs/TextInputs/InputFeild";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const SignUpFirstPage = (props) => {
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
          title="ثبت اطلاعات عمومی"
          field="اطلاعات عمومی خود را ثبت کنید !"
          classH2Field="text-black text-6xl"
          classPfield="text-[#8D8D8D] text-xl mt-2"
        />
      </div>

      <Formik
        initialValues={props.data}
        validationSchema={Yup.object({
          firstName: Yup.string().required("لطفا فیلد نام را پر کنید"),

          lastName: Yup.string().required("لطفا فیلد نام خانوادگی را پر کنید"),
          email: Yup.string()
            .email("الگوی وارد شده صحیح نمی باشد")
            .required("لطفا فیلد ایمیل را پر کنید"),
        })}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="flex flex-col items-center mt-24">
              <InputFeild
                classForm="flex flex-col items-start"
                label="نام:"
                name="firstName"
                type="text"
                id="firstName"
                classInput="w-96 p-2 border-2 border-[#B7B7B7] focus:border-2 focus:border-blue-900 bg-white rounded-[15px] outline-0"
                classLabel="text-xl mb-2"
                placeholder="نام خود را وارد کنید..."
                classError="text-red-500 h-[20px] mb-1 mr-1"
              />
              <InputFeild
                classForm="flex flex-col mt-2"
                label="نام خانوادگی:"
                name="lastName"
                type="text"
                id="lastName"
                classInput="w-96 p-2 border-2 border-[#B7B7B7] focus:border-2 focus:border-blue-900 bg-white rounded-[15px] outline-0"
                classLabel="text-xl mb-2"
                placeholder="نام خانوادگی خود را وارد کنید..."
                classError="text-red-500 h-[20px] mb-1 mr-1"
              />
              <InputFeild
                classForm="flex flex-col mt-2"
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
                تکمیل ثبت نام
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpFirstPage;
