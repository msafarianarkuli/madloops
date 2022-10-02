import React, { useRef } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import editImg from "../../../Assets/img-user-panel/edit.png";
import Input from "../../common/Inputs/TextInputs/Input";
import CustomDatePicker from "../../common/Date-Picker/date-picker-component";
const EditProfile = () => {
  const fileInput = useRef();
  return (
    <>
      <div>
        <div className="relative">
          <img
            src={editImg}
            className="rounded-t-2xl w-full h-80 object-cover"
          />
          <div
            className="absolute right-0 left-0 mx-auto w-[60px] h-[60px] sm:w-[120px] sm:h-[100px] top-0 bottom-0 my-auto
            group "
            onClick={() => fileInput.current.click()}
          >
            <button
              className="bg-white text-transparent backdrop-opacity-20 backdrop-blur-[4px] backdrop-brightness-25 opacity-20
          rounded-tl-2xl rounded-tr-lg rounded-bl-lg rounded-br-2xl w-full h-full
          transition ease-in-out duration-300 group-hover:-translate-y-1
       "
            />
            <span
              className="text-white text-sm sm:text-lg absolute left-0 right-0 text-center top-0 bottom-0 h-8 my-auto
            transition ease-in-out duration-300 group-hover:-translate-y-1 cursor-pointer"
            >
              ویرایش تصویر
            </span>
          </div>
        </div>
        <Formik
          initialValues={{
            name: "",
            userName: "",
            nationalNumber: "",
            email: "",
            birthDate: "",
            phone: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required(
              "لطفا فیلد نام و  نام خانوادگی را پر کنید"
            ),
            userName: Yup.string()
              .required("لطفا فیلد نام کابری را پر کنید")
              .matches(
                /^[a-zA-Z0-9_-]{3,16}$/,
                " نام کاربری باید بین 3 تا 16 کارکتر بوده و می تواند شامل حروف انگلیسی، اعداد و خط تیره باشد"
              ),
            nationalNumber: Yup.string()
              .required("لطفا فیلد کد ملی را پر کنید")
              .matches(/^[0-9]+$/, "الگوی وارد شده صحیح نمی باشد")
              .min(10, "تعداد ارقام کد ملی صحیح نیست")
              .max(10, "تعداد ارقام کد ملی صحیح نیست"),
            email: Yup.string()
              .email("الگوی وارد شده صحیح نمی باشد")
              .required("لطفا فیلد ایمیل را پر کنید"),
            birthDate: Yup.string().required("لطفا فیلد تاریخ تولد را پر کنید"),
            phone: Yup.string()
              .required("لطفا فیلد شماره تماس را پر کنید")
              .matches(/^[0-9]+$/, "الگوی وارد شده صحیح نمی باشد")
              .min(11, "تعداد ارقام شماره تلفن صحیح نیست")
              .max(11, "تعداد ارقام شماره تلفن صحیح نیست"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 p-6">
              <div>
                <Input
                  className="py-2 px-3 w-full rounded-tl-2xl rounded-md bg-lite-gray focus:outline-gray-400"
                  name="name"
                  type="text"
                  label="نام و نام خانوادگی:"
                  placeholder="میکائیل محسنی"
                />
              </div>
              <div>
                <Input
                  className="py-2 px-3 w-full rounded-tl-2xl rounded-md bg-lite-gray focus:outline-gray-400"
                  name="userName"
                  type="text"
                  label="نام کاربری:"
                  placeholder="michael"
                />
              </div>
              <div>
                <Input
                  className="py-2 px-3 w-full rounded-tl-2xl rounded-md bg-lite-gray focus:outline-gray-400"
                  name="nationalNumber"
                  type="text"
                  label="کد ملی:"
                  placeholder="2150008898"
                />
              </div>
              <div>
                <Input
                  className="py-2 px-3 w-full rounded-tl-2xl rounded-md bg-lite-gray focus:outline-gray-400"
                  name="email"
                  type="text"
                  label="ایمیل:"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <CustomDatePicker
                  name="birthDate"
                  label="تاریخ تولد:"
                  placeholder="1401/06/12"
                  classLabel="text-gray-600 block text-lg"
                  className="py-2 px-3 w-full rounded-tl-2xl rounded-md bg-lite-gray focus:outline-gray-400"
                />
              </div>
              <div>
                <Input
                  className="py-2 px-3 w-full rounded-tl-2xl rounded-md bg-lite-gray focus:outline-gray-400"
                  name="phone"
                  type="text"
                  label="شماره موبایل:"
                  placeholder="09031471874"
                />
              </div>
            </div>
            <div className="text-center text-base sm:text-xl">
              <button
                className="border-2 border-lite-purple px-6 py-2 rounded-full text-lite-purple mx-2
              hover:border-red-600 hover:text-red-600 transition ease-in-out duration-300"
              >
                لغو تغییرات
              </button>
              <button
                type="submit"
                className="border-2 border-lite-purple bg-lite-purple px-6 py-2 rounded-full text-white mx-2
                hover:bg-green-600 hover:border-green-600 hover:text-white transition ease-in-out duration-300"
              >
                ثبت تغییرات
              </button>
            </div>
          </Form>
        </Formik>
        <input type="file" className="invisible" ref={fileInput} />
      </div>
    </>
  );
};

export default EditProfile;
