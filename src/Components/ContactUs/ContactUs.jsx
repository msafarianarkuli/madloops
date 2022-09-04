import React from 'react';
import {
  BsEnvelopeFill,
  BsTelephoneFill,
  BsGeoAltFill,
} from 'react-icons/bs';
import Call from './Call';
import Message from './Message';

const ContactUs = () => {
  return (
    <div className="border-2 border-[#7F56DA] rounded-3xl m-3 sm:m-4 md:m-5 lg:m-8 p-3 lg:p-8">
      <div className="mt-16 mb-10">
        <h1 className="text-center text-3xl font-semibold mb-6">
          در تماس باشید!
        </h1>
        <p className="text-center text-gray-500">
          از طریق موارد زیر می توانید با ما در تماس باشید و اطلاع
          رسانی کنید.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
        <div className="flex flex-col justify-center items-center bg-[#7F56DA] rounded-2xl py-14">
          <BsEnvelopeFill className="text-3xl text-white mb-3" />
          <p className="text-white">ارسال پیام</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-[#7F56DA] rounded-2xl py-14">
          <BsTelephoneFill className="text-3xl text-[#7F56DA] mb-3" />
          <p className="text-[#7F56DA]">تلفن تماس و ایمیل</p>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-[#7F56DA] rounded-2xl py-14">
          <BsGeoAltFill className="text-3xl text-[#7F56DA] mb-3" />
          <p className="text-[#7F56DA]">مکان پژوهشگاه</p>
        </div>
      </div>
      <div className="border-2 border-[#7F56DA] rounded-3xl mt-8 p-10">
        {/* <Message /> */}
        {/* <Call /> */}
      </div>
    </div>
  );
};

export default ContactUs;
