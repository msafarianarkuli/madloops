import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import editImg from "../../../Assets/img-user-panel/edit.png";
import { useSelector } from "react-redux";
import { toastifyToast } from "../../common/Toast/toast";
import { selectCurrentUser } from "./../../../store/auth/authSlice";
import { selectSessionCurrentUser } from "../../../store/auth/authSessionSlice";
import InputFeild from "./../../common/Inputs/TextInputs/InputFeild";
import {
  useResetPasswordMutation,
  useForgetPasswordMutation,
} from "../../../store/auth/authApi";
import { useGetStudentByIdQuery } from "../../../store/studentManager/studentApi";

const EditPassword = () => {
  const currentUser = useSelector(selectCurrentUser);
  const currentSessionUser = useSelector(selectSessionCurrentUser);
  const [studentInfo, setStudentInfo] = useState({
    password: "",
    confirmPassword: "",
  });
  const { data: userById, isFetching } = useGetStudentByIdQuery({
    id: currentUser?._id || currentSessionUser?._id,
  });
  console.log(userById);
  const [resetPassword] = useResetPasswordMutation();
  const [forgetPassword] = useForgetPasswordMutation();

  const handleSubmit = (values) => {
    const editing = async () => {
      const userObj = {
        password: values.password,
        confirmPassword: values.confirmPassword,
        id: currentUser?._id || currentSessionUser?._id,
      };

      if (userById?.resetPasswordToken !== null) {
        const response = await resetPassword({
          password: userObj.password,
          token: userById?.resetPasswordToken,
        });
        if (response.status === 200) {
          toastifyToast.success(response.data.message[0].message);
          values.password = "";
          values.confirmPassword = "";
        } else {
          toastifyToast.warning("لطفا مجددا امتحان فرمایید");
        }
      } else {
        await forgetPassword({ email: userById?.email });
        await isFetching;
        const response = await resetPassword({
          password: userObj.password,
          token: userById?.resetPasswordToken,
        });
        if (response.status === 200) {
          toastifyToast.success(response.data.message[0].message);
          values.password = "";
          values.confirmPassword = "";
        } else {
          toastifyToast.warning("لطفا مجددا امتحان فرمایید");
        }
      }
    };

    editing();
  };

  const handleReset = (resetForm) => {
    toastifyToast.warning("تغییرات شما لغو شد");
    resetForm();
  };

  return (
    <>
      <div>
        <div className="relative">
          <img
            src={editImg}
            className="rounded-t-xl w-full h-80 object-cover"
          />
        </div>

        <Formik
          initialValues={studentInfo}
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
          {({ resetForm }) => (
            <Form>
              <div className="flex flex-col items-center">
                <InputFeild
                  classForm="flex flex-col items-start h-24"
                  label="رمز عبور جدید:"
                  name="password"
                  type="password"
                  id="password"
                  classInput="dark:bg-dark-primary dark:text-white sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white rounded-xl outline-none duration-300"
                  classLabel="text-xl mb-2 dark:text-white"
                  placeholder="رمز عبور جدید را وارد کنید..."
                  classError="text-red-500 h-[20px] mb-1 m-auto w-96"
                />
                <InputFeild
                  classForm="flex flex-col mt-4 h-24"
                  label="تکرار رمز عبور جدید:"
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  classInput="dark:bg-dark-primary dark:text-white sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white rounded-xl outline-none duration-300"
                  classLabel="text-xl mb-2 dark:text-white"
                  placeholder="رمز عبور جدید را دوباره وارد کنید..."
                  classError="text-red-500 h-[20px] mb-1"
                />
              </div>
              <div className="text-center text-base sm:text-xl animate-[onLoadPanel_1s_ease-in]">
                <button
                  className="border-2 border-lite-purple px-6 py-2 rounded-lg text-lite-purple mx-2
              hover:border-red-600 hover:text-red-600 transition ease-in-out duration-300"
                  onClick={() => handleReset(resetForm)}
                >
                  لغو تغییرات
                </button>
                <button
                  type="submit"
                  className="border-2 border-lite-purple bg-lite-purple px-6 py-2 rounded-lg text-white mx-2
                hover:bg-green-600 hover:border-green-600 hover:text-white transition ease-in-out duration-300"
                >
                  ثبت تغییرات
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default EditPassword;
