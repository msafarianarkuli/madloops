import React from 'react';
import {
  BsEnvelopeFill,
  BsTelephoneFill,
  BsGeoAltFill,
} from 'react-icons/bs';
import { Outlet } from 'react-router-dom';
import SendMessage from '../../Components/content/ContactUs/SendMessage';
import ContactItem from '../../Components/content/ContactUs/ContactItem';
import Call from '../../Components/content/ContactUs/Call';
import Location from '../../Components/content/ContactUs/Location';

const ContactItems = [
  {
    id: 1,
    icon: <BsEnvelopeFill className="switchItems-icon" />,
    title: 'ارسال پیام',
  },
  {
    id: 2,
    icon: <BsTelephoneFill className="switchItems-icon" />,
    title: 'تلفن تماس',
  },
  {
    id: 3,
    icon: <BsGeoAltFill className="switchItems-icon" />,
    title: 'مکان پژوهشگاه',
  },
];

const ContactUs = () => {
  return (
    <div className="container mx-auto">
      <div className="border-2 border-[#7F56DA] rounded-3xl m-3 sm:m-4 md:m-5 lg:m-8 p-3 lg:p-8">
        <div className="mt-16 mb-10">
          <h1 className="text-center text-3xl font-black mb-6">
            در تماس باشید!
          </h1>
          <p className="text-center text-gray-500 text-lg">
            از طریق موارد زیر می توانید با ما در تماس باشید و اطلاع
            رسانی کنید.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
          {ContactItems.map((item) => (
            <ContactItem
              key={item.id}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
        <div className="rounded-3xl mt-8 py-10">
          <Outlet />
          {/* <Call /> */}
          {/* <SendMessage /> */}
          {/* <Location locationApi="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207344.71954696506!2d51.487740482308496!3d35.70749258978972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2z2KrZh9ix2KfZhtiMINin2LPYqtin2YYg2KrZh9ix2KfZhtiMINin24zYsdin2YY!5e0!3m2!1sfa!2s!4v1662450014006!5m2!1sfa!2s" /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
