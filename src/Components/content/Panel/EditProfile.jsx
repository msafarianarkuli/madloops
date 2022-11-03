import React, { useRef, useState, useEffect } from "react";
import { Form, Formik, isEmptyArray } from "formik";
import * as Yup from "yup";
import editImg from "../../../Assets/img-user-panel/edit.png";
import Input from "../../common/Inputs/TextInputs/Input";
import CustomDatePicker from "../../common/Date-Picker/date-picker-component";
import { useUpdateStudentInfoMutation } from "../../../store/studentManager/studentApi";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../store/auth/authSlice";
import { toastifyToast } from "../../common/Toast/toast";
import { selectCurrentUser } from "./../../../store/auth/authSlice";
import { useUploadImgMutation } from "../../../store/upload-img/uploadApiSlice";

const EditProfile = () => {
  const currentUser = useSelector(selectCurrentUser);
  const [studentInfo, setStudentInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nationalId: "",
    phoneNumber: "",
    birthDate: "",
    profile: "",
  });

  const dispatch = useDispatch();
  const [updateStudentInfo, { isSuccess, data, isError, error, isLoading }] =
    useUpdateStudentInfoMutation();

  const [uploadImg] = useUploadImgMutation();

  useEffect(() => {
    if (isSuccess) {
      toastifyToast.success(data.message[0].message);
      setStudentInfo("");
    }

    if (isError) {
      if (error.originalStatus === 400) {
        toastifyToast.error("احتمالا چیزی را اشتباه وارد کردید!");
      } else if (error.originalStatus === 401) {
        toastifyToast.error("عدم دسترسی؛ لطفا وارد حساب خود شوید");
      } else if (error.originalStatus === 403) {
        toastifyToast.error(error?.data.message.message[0].message);
      } else {
        toastifyToast.error("مشکلی رخ داده است.");
      }
    }
  }, [isLoading]);

  const handleSubmit = (values) => {
    const editing = async () => {
      // if (
      //   values.firstName + " " + values.lastName === currentUser.fullName &&
      //   values.email === currentUser.email &&
      //   values.phoneNumber === currentUser.phoneNumber &&
      //   values.nationalId === currentUser.nationalId &&
      //   values.birthDate === currentUser.birthDate
      // ) {
      //   toastifyToast.error("اطلاعات وارد شده تکراری است");
      // } else { }
      if (values.profile === "") {
        console.log(values.profile);
        const update = await updateStudentInfo({
          fullName: values.firstName + " " + values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          birthDate: values.birthDate,
          nationalId: values.nationalId,
          profile:
            "http://res.cloudinary.com/df9w7u89a/image/upload/v1652941122/pmdsibcoa9kuv8xmmozn.png",
          _id: currentUser._id,
        });

        // toastifyToast.success(update.message[0].message, {});
        console.log(update);
        // dispatch(logIn({ user: update.result }));
      } else {
        // let myFormData = new FormData();
        // values.profile.forEach((photo, index) => {
        //   myFormData.append(`photo${photo}`, values.profile[index]);
        // });
        const imagefile = document.querySelector("#file");
        let myFormData = new FormData();
        myFormData.append("image", imagefile.files[0]);
        const upload = await uploadImg(myFormData);
        console.log(upload);
        console.log(values.profile);
        if (upload.status === 200) {
          const Picture = upload.data.result;

          const update = await updateStudentInfo({
            email: values.email,
            phoneNumber: values.phoneNumber,
            birthDate: values.birthDate,
            nationalId: values.nationalId,
            fullName: values.firstName + " " + values.lastName,
            profile: Picture,
            _id: currentUser._id,
          });
          console.log(update);
          toastifyToast.success(update.message[0].message, {});
          // dispatch(logIn({ user: update.result }));
        } else {
          toastifyToast.warning("لطفا مجددا امتحان فرمایید", {});
        }
      }
    };
    editing();
  };

  const handleReset = (resetForm) => {
    toastifyToast.warning("تغییرات شما لغو شد");
    resetForm();
  };

  const fileInput = useRef();
  return (
    <>
      <div>
        <div className="relative">
          <img
            src={editImg}
            className="rounded-t-xl w-full h-80 object-cover"
          />
          <div
            className="absolute right-0 left-0 mx-auto w-[60px] h-[60px] sm:w-[120px] sm:h-[100px] top-0 bottom-0 my-auto
            group "
            onClick={() => fileInput.current.click()}
          >
            <button
              className="bg-white text-transparent backdrop-opacity-20 backdrop-blur-[4px] backdrop-brightness-25 opacity-20
          rounded-tl-xl rounded-tr-lg rounded-bl-lg rounded-br-xl w-full h-full
          transition ease-in-out duration-300 group-hover:-translate-y-1"
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
          initialValues={studentInfo}
          validationSchema={Yup.object({
            firstName: Yup.string().required("لطفا فیلد نام را پر کنید"),
            lastName: Yup.string().required(
              "لطفا فیلد نام خانوادگی را پر کنید"
            ),
            nationalId: Yup.string()
              .required("لطفا فیلد کد ملی را پر کنید")
              .matches(/^[0-9]+$/, "الگوی وارد شده صحیح نمی باشد")
              .min(10, "تعداد ارقام کد ملی صحیح نیست")
              .max(10, "تعداد ارقام کد ملی صحیح نیست"),
            email: Yup.string()
              .email("الگوی وارد شده صحیح نمی باشد")
              .required("لطفا فیلد ایمیل را پر کنید"),
            birthDate: Yup.string().required("لطفا فیلد تاریخ تولد را پر کنید"),
            phoneNumber: Yup.string()
              .required("لطفا فیلد شماره تماس را پر کنید")
              .matches(/^[0-9]+$/, "الگوی وارد شده صحیح نمی باشد")
              .min(11, "تعداد ارقام شماره تلفن صحیح نیست")
              .max(11, "تعداد ارقام شماره تلفن صحیح نیست"),
          })}
          onSubmit={handleSubmit}
        >
          {({ resetForm, setFieldValue }) => (
            <Form>
              <input
                type="file"
                id="file"
                name="profile"
                className="invisible"
                ref={fileInput}
                onChange={(event) => {
                  const files = event.target.files;
                  let myFiles = Array.from(files);
                  setFieldValue("profile", myFiles);
                }}
                multiple
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 p-6 animate-[onLoadPanel_.5s_ease-in]">
                <div>
                  <Input
                    className="py-2 px-3 w-full rounded-md bg-lite-gray focus:outline-gray-400 dark:text-white dark:bg-transparent dark:border"
                    name="firstName"
                    type="text"
                    label="نام:"
                    placeholder="میکائیل"
                  />
                </div>
                <div>
                  <Input
                    className="py-2 px-3 w-full rounded-md bg-lite-gray focus:outline-gray-400 dark:text-white dark:bg-transparent dark:border"
                    name="lastName"
                    type="text"
                    label="نام خانوادگی:"
                    placeholder="michael"
                  />
                </div>
                <div>
                  <Input
                    className="py-2 px-3 w-full rounded-md bg-lite-gray focus:outline-gray-400 dark:text-white dark:bg-transparent dark:border"
                    name="nationalId"
                    type="text"
                    label="کد ملی:"
                    placeholder="2150008898"
                  />
                </div>
                <div>
                  <Input
                    className="py-2 px-3 w-full rounded-md bg-lite-gray focus:outline-gray-400 dark:text-white dark:bg-transparent dark:border"
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
                    classLabel="text-gray-600 block text-lg dark:text-dark-secondary-title"
                    className="py-2 px-3 w-full rounded-lg bg-lite-gray focus:outline-gray-400 dark:text-white dark:bg-transparent dark:border"
                  />
                </div>
                <div>
                  <Input
                    className="py-2 px-3 w-full rounded-lg bg-lite-gray focus:outline-gray-400 dark:text-white dark:bg-transparent dark:border"
                    name="phoneNumber"
                    type="text"
                    label="شماره موبایل:"
                    placeholder="09031471874"
                  />
                </div>
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

export default EditProfile;
