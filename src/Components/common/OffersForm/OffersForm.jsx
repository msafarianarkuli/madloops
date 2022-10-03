import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { Button } from '../button-component/button.component';
import Input from '../Inputs/TextInputs/Input';
import Textarea from '../Inputs/TextareaInputs/Textarea';
const OffersForm = () => {
  return (
    <div className="form py-2">
      <label htmlFor="email">ایمیل:</label>
      <Formik
        initialValues={{ email: '', message: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('الگوی وارد شده صحیح نمی باشد')
            .required('لطفا فیلد ایمیل را پر کنید'),
          message: Yup.string().required('لطفا پیغام خود را بنویسید'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Input
            name="email"
            placeholder="ایمیل خود را وارد کنید.."
            type="text"
            className="rounded-lg mt-1 py-2 px-2 border border-gray-400 hover:border-lite-purple bg-transparent input w-full"
          />
          <Textarea
            name="message"
            placeholder="متن خود را وارد کنید..."
            className="rounded-lg py-2 px-2 mt-2 min-h-full max-h-56 border border-gray-400 hover:border-lite-purple bg-transparent input"
          />
          <Button type="submit" classButton="btn btn-primary w-full text-lg mb-1 pb-1">
            ارسال
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default OffersForm;
