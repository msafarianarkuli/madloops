import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../common/Inputs/TextInputs/Input';
import Textarea from '../../common/Inputs/TextareaInputs/Textarea';
import { Button } from '../../common/button-component/button.component';
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
          phone: Yup.number()
            .min(11, 'شماره تماس وارد شده صحیح نمی باشد')
            .typeError('الگوی وارد شده صحیح نمی باشد')
            .required('لطفا فیلد شماره تماس را پر کنید'),
          message: Yup.string().required('لطفا پیغام خود را بنویسید'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 md:gap-8 lg:gap-8 xl:mx-28">
            <div>
              <Input
                label="نام و نام خانوادگی"
                name="name"
                type="text"
              />
              <Input label="ایمیل" name="email" type="text" />
              <Input label="شماره تماس" type="text" name="phone" />
            </div>
            <div>
              <Textarea label="پیام" name="message" />
            </div>
          </div>
          <Button
            ButtonType="submit"
            classButton="border-2 rounded-xl text-base pt-2 pb-3 px-10 transition ease-out duration-300 border-[#8055D9]  bg-[#8055D9] text-white
            hover:bg-[#673CC0] hover:border-[#673CC0] hover:shadow-md mx-auto block"
          >
            ارسال پیام
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default SendMessage;
