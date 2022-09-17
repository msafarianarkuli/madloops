import { Form, Formik } from 'formik';
import React, { useRef } from 'react';
import editImg from '../../../Assets/img-user-panel/edit.png';
import Input from '../../common/Inputs/TextInputs/Input';
const EditProfile = () => {
  const fileInput = useRef();
  return (
    <>
      <div>
        <div className="relative">
          <img src={editImg} className="rounded-t-4xl w-full" />
          <div
            className="absolute right-0 left-0 mx-auto w-[60px] h-[60px] sm:w-[120px] sm:h-[100px] top-0 bottom-0 my-auto "
            onClick={() => fileInput.current.click()}
          >
            <button
              className="bg-white text-transparent backdrop-opacity-20 backdrop-blur-[4px] backdrop-brightness-25 opacity-20
          rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl w-full h-full
          
       "
            />
            <span className="text-white text-sm sm:text-lg absolute left-0 right-0 text-center top-0 bottom-0 h-8 my-auto">
              ویرایش تصویر
            </span>
          </div>
        </div>
        <Formik
          initialValues={{
            name: '',
            userName: '',
            nationalNumber: '',
            email: '',
            birthDate: '',
            phone: '',
          }}
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
                />
              </div>
              <div>
                <Input
                  className="py-2 px-3 w-full rounded-tl-2xl rounded-md bg-lite-gray focus:outline-gray-400"
                  name="userName"
                  type="text"
                  label="نام کاربری:"
                />
              </div>
              <div>
                <Input
                  className="py-2 px-3 w-full rounded-tl-2xl rounded-md bg-lite-gray focus:outline-gray-400"
                  name="nationalNumber"
                  type="text"
                  label="کد ملی:"
                />
              </div>
              <div>
                <Input
                  className="py-2 px-3 w-full rounded-tl-2xl rounded-md bg-lite-gray focus:outline-gray-400"
                  name="email"
                  type="text"
                  label="ایمیل:"
                />
              </div>
              <div>
                <Input
                  className="py-2 px-3 w-full rounded-tl-2xl rounded-md bg-lite-gray focus:outline-gray-400"
                  name="birthDate"
                  type="text"
                  label="تاریخ تولد:"
                />
              </div>
              <div>
                <Input
                  className="py-2 px-3 w-full rounded-tl-2xl rounded-md bg-lite-gray focus:outline-gray-400"
                  name="phone"
                  type="text"
                  label="شماره موبایل:"
                />
              </div>
            </div>
            <div className="text-center text-base sm:text-xl">
              <button
                className="border-2 border-lite-purple px-6 py-2 rounded-full text-lite-purple mx-2
              hover:bg-lite-purple hover:text-white transition ease-in-out duration-300"
              >
                لغو تغییرات
              </button>
              <button
                type="submit"
                className="border-2 border-lite-purple bg-lite-purple px-6 py-2 rounded-full text-white mx-2
                hover:bg-white hover:text-lite-purple transition ease-in-out duration-300"
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
