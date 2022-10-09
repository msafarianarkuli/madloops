import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Textarea from '../Inputs/TextareaInputs/Textarea';
import Input from '../Inputs/TextInputs/Input';
import profile from '../../../Assets/profile.png';

const SendComment = ({ onCommentActive, onSendReply }) => {
  return (
    <>
      <img
        src={profile}
        className="w-16 h-16 rounded-full ml-3 mb-2 md:mb-0"
      />
      <div className="grow">
        <Formik
          initialValues={{
            name: '',
            email: '',
            body: '',
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('لطفا نام خود را وارد کنید'),
            email: Yup.string()
              .email('الگوی وارد شده صحیح نمی باشد')
              .required('لطفا فیلد ایمیل را پر کنید')
              .matches(
                /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                'دامنه ایمیل را به درستی وارد کنید'
              ),
            body: Yup.string().required('لطفا نظر خود را بیان کنید'),
          })}
          onSubmit={(values) => {
            onSendReply(0, values.body, values.name, values.email);
            onCommentActive(false);
          }}
        >
          <Form>
            <div className="bg-slate-100 text-base md:text-xl text-gray-400 rounded-lg dark:bg-dark-secondary">
              <div className="flex w-full border rounded-tl-xl rounded-tr-xl">
                <div className="w-1/2 p-2 md:p-4 border-l">
                  <Input
                    className="bg-transparent w-full outline-none border-b-2 mb-2 focus:border-b-lite-purple duration-300"
                    type="text"
                    name="name"
                    label="نام:"
                  />
                </div>
                <div className="w-1/2 p-2 md:p-4">
                  <Input
                    className="bg-transparent w-full outline-none border-b-2 mb-2 focus:border-b-lite-purple duration-300 dark:selection:bg-red-600"
                    type="text"
                    name="email"
                    label="ایمیل:"
                  />
                </div>
              </div>
              <div className="flex border-r border-l border-b p-4">
                <Textarea
                  className="grow min-h-fit max-h-72 bg-transparent outline-none block"
                  name="body"
                  label="متن نظر:"
                />
              </div>
              <div className="border-r border-l border-b rounded-bl-lg rounded-br-lg bg-lite-purple text-center text-white overflow-hidden">
                <button className="w-full py-2" type="submit">
                  ارسال نظر
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SendComment;
