import React from 'react';
import {
  BsEnvelopeFill,
  BsTelephoneFill,
  BsGeoAltFill,
} from 'react-icons/bs';
import Call from './Call';
import SwitchItem from './common/SwitchItem';
import Message from './Message';

const switchItems = [
  {
    id: 1,
    icon: 'BsEnvelopeFill',
    title: 'ارسال پیام',
  },
  {
    id: 2,
    icon: 'BsTelephoneFill',
    title: 'تلفن تماس و ایمیل',
  },
  {
    id: 3,
    icon: 'BsGeoAltFill',
    title: 'مکان پژوهشگاه',
  },
];

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
        {switchItems.map((item) => (
          <SwitchItem key={item.id} icon={item.icon}>
            {item.title}
          </SwitchItem>
        ))}
      </div>
      <div className="border-2 border-[#7F56DA] rounded-3xl mt-8 p-10">
        {/* <Message /> */}
        {/* <Call /> */}
      </div>
    </div>
  );
};

export default ContactUs;
