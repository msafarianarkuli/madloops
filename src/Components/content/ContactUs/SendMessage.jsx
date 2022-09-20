import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputGroup from '../../common/Inputs/TextInputs/InputGroup';
import Textarea from '../../common/Inputs/TextareaInputs/Textarea';
import { Button } from '../../common/button-component/button.component';
import { BsPerson, BsEnvelope, BsPhoneVibrate } from 'react-icons/bs';
const SendMessage = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required(
            'لطفا فیلد نام و  نام خانوادگی را پر کنید'
          ),
          email: Yup.string()
            .email('الگوی وارد شده صحیح نمی باشد')
            .required('لطفا فیلد ایمیل را پر کنید'),
          phone: Yup.string()
            .required('لطفا فیلد شماره تماس را پر کنید')
            .matches(/^[0-9]+$/, 'الگوی وارد شده صحیح نمی باشد')
            .min(11, 'تعداد ارقام شماره تلفن صحیح نیست')
            .max(11, 'تعداد ارقام شماره تلفن صحیح نیست'),

          message: Yup.string().required('لطفا پیغام خود را بنویسید'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 md:gap-8 lg:gap-8 xl:mx-28">
            <div>
              <InputGroup
                label="نام و نام خانوادگی"
                name="name"
                type="text"
                icon={<BsPerson />}
              />
              <InputGroup
                label="ایمیل"
                name="email"
                type="text"
                icon={<BsEnvelope />}
              />
              <InputGroup
                label="شماره تماس"
                type="text"
                name="phone"
                icon={<BsPhoneVibrate />}
              />
            </div>
            <div>
              <Textarea
                label="پیام"
                name="message"
                className="rounded-lg py-2 bg-[#F1F2F7] outline-none w-full max-h-64 px-4 border-2 border-[#F1F2F7] focus:border-lite-purple focus:bg-white"
              />
            </div>
          </div>
          <Button
            ButtonType="submit"
            classButton="border-2 rounded-xl text-base pt-2 pb-3 px-10 transition ease-out duration-300 border-lite-purple  bg-lite-purple text-white
            hover:bg-lite-purple hover:border-lite-purple hover:shadow-md mx-auto block"
          >
            ارسال پیام
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default SendMessage;
