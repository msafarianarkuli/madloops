import { Formik, Form } from "formik";
import * as Yup from "yup";
import React from "react";
import AnimateLoginSvg from "../../common/Animate-Login-SVG/animate-login-svg.component";
import { FieldName } from "../../common/field-name-component/field-name.component";
import { Button } from "../../common/button-component/button.component";
import InputFeild from "../../common/Inputs/TextInputs/InputFeild";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-2 h-screen">
        <div className="col-span-1 lg:block hidden dark:bg-[#222326] bg-lite-gray relative">
          <div className="h-650">
            <AnimateLoginSvg />
          </div>
          <div className="h-20 w-full absolute bottom-0">
            <Link to="/">
              <img
                className="w-12 m-auto mt-4 hover:scale-110 duration-300 cursor-pointer animate-[onLoadHome_2s_ease-in-out]"
                src={require("../../../Assets/img-auth/home.png")}
                alt="home"
              />
            </Link>
          </div>
        </div>
        <div className="h-10 w-10 block lg:hidden absolute top-0 right-5 animate-[onLoadHomeRes_1s_ease-in-out]">
          <Link to="/">
            <img
              className="w-12 m-auto mt-4 hover:scale-110 duration-100 cursor-pointer"
              src={require("../../../Assets/img-auth/home.png")}
              alt="home"
            />
          </Link>
        </div>
        <div className="lg:col-span-1 col-span-2 bg-white dark:bg-dark-primary">
          <div className=" animate-[onLoadAnim_1.5s_ease-in-out]">
            <div className="sm:h-44 lg:h-48 h-40">
              <FieldName
                showH2
                showP
                classH2Field="lg:text-7xl sm:text-5xl text-4xl pt-10 text-center dark:text-[#FFFFFF]"
                title="ورود"
                classPfield="lg:text-2xl sm:text-xl text-lg text-deep-gray pt-3 text-center"
                field="خوش اومدی ! لطفا اطلاعاتت رو وارد کن."
              />
            </div>
            <div className="h-[487px]">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("الگوی وارد شده صحیح نمی باشد")
                    .required("لطفا فیلد ایمیل را پر کنید")
                    .matches(
                      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                      "دامنه ایمیل را به درستی وارد کنید"
                    ),
                  password: Yup.string()
                    .required("لطفا رمز عبور خود را وارد کنید")
                    .matches(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                      "باید شامل 8 نویسه، یک حروف بزرگ، یک عدد و یک نویسه خاص باشد"
                    ),
                })}
                onSubmit={(values) => {
                  console.log(values);
                  alert(JSON.stringify(values));
                }}
              >
                <Form>
                  <div className="h-28 flex justify-center">
                    <InputFeild
                      classForm="flex flex-col"
                      label="ایمیل:"
                      name="email"
                      type="text"
                      id="email"
                      classInput="sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white dark:text-gray-400 dark:bg-dark-primary rounded-xl outline-none duration-300"
                      classLabel="text-xl mb-2 dark:text-gray-300"
                      placeholder="نمونه : example@gmail.com"
                      classError="text-red-500 h-[20px] mb-1"
                    />
                  </div>
                  <div className="h-24 flex justify-center">
                    <InputFeild
                      classForm="flex flex-col"
                      label="رمز عبور:"
                      name="password"
                      type="password"
                      id="password"
                      classInput="sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] focus:border-transparent focus:input-shadow bg-white dark:text-gray-400 dark:bg-dark-primary rounded-xl outline-none duration-300"
                      classLabel="text-xl mb-2 dark:text-gray-300"
                      placeholder="باید دارای 8 نویسه باشد ..."
                      classError="text-red-500 h-[20px] mb-1"
                    />
                  </div>
                  <div className="h-10 lg:mt-5 sm:mt-3 mt-3 grid grid-cols-2">
                    <div className="col-span-1">
                      <InputFeild
                        label="مرا به خاطر بسپار"
                        name="rememberMe"
                        type="checkbox"
                        id="rememberMe"
                        classInput="float-left w-5 h-5 m-2 dark:fill-[#3b3b3b]"
                        classLabel="float-left text-lg sm:ml-14 ml-6 mt-1 dark:text-gray-300"
                      />
                    </div>
                    <div className="col-span-1">
                      <Link to="/forget-pass">
                        <Button className="text-lg mt-1 sm:mr-24 mr-20 text-deep-purple dark:text-[#b073cc]">
                          فراموشی رمز
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-2 h-14 flex justify-center">
                    <Button
                      className="bg-button-purple text-white sm:w-96 w-80 text-xl h-12 mt-1 text-center rounded-xl hover:button-shadow dark:hover:shadow-purple duration-300 ease-in-out"
                      ButtonType="submit"
                    >
                      ورود
                    </Button>
                  </div>
                  <div className="mt-2 h-14 flex justify-center">
                    <Button
                      className="relative border-2 border-button-purple text-deep-purple dark:border-[#b073cc] dark:text-[#b073cc] dark:hover:shadow-purple sm:w-96 w-80 text-xl h-12 mt-1 text-right sm:pr-32 pr-24 rounded-xl hover:button-shadow duration-300 
                    ease-in-out group"
                      ButtonType="submit"
                    >
                      ادامه با گوگل
                      <FcGoogle className="text-2xl group-hover:animate-[onHoverGoogle_1s_ease-in-out_infinite] absolute sm:left-32 left-24 top-3  group-hover:text-3xl group-hover:top-2 duration-200" />
                    </Button>
                  </div>
                  <div className="mt-2 h-8 flex justify-center text-sick-gray">
                    <FieldName
                      showP
                      field="حساب کاربری نداری؟"
                      classPfield="mt-1 ml-2 text-cool-gray dark:text-sick-gray"
                    />
                    <div className="sm:block hidden">
                      ______________________________________
                    </div>
                    <div className="sm:hidden block">
                      ____________________________
                    </div>
                  </div>
                  <div className="mt-2 h-14 flex justify-center">
                    <Link to="/sign-up">
                      <Button
                        className="border-2 border-button-purple text-deep-purple dark:border-[#b073cc] dark:text-gray-200 sm:w-96 w-80 text-xl h-12 mt-1 text-center rounded-xl hover:button-shadow dark:hover:shadow-purple duration-300 
                    ease-in-out hover:bg-button-purple hover:text-white"
                        ButtonType="submit"
                      >
                        ثبت نام
                      </Button>
                    </Link>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
