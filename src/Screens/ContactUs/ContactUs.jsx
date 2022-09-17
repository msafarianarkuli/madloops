import React from 'react';
import { Outlet } from 'react-router-dom';
import ContactItem from '../../Components/content/ContactUs/ContactItem';
import ContactUsItems from '../../Core/services/Fake Service/ContactUsItems';

const ContactUs = () => {
  return (
    <div className="container mx-auto">
      <div className="border-2 border-[#7F56DA] rounded-3xl m-3 sm:m-4 md:m-5 lg:m-8 p-3 lg:p-8">
        <div className="mt-16 mb-10">
          <h1 className="text-center text-3xl font-black mb-6 text-deep-purple">
            در تماس باشید!
          </h1>
          <p className="text-center text-deep-purple text-lg">
            از طریق موارد زیر می توانید با ما در تماس باشید و اطلاع
            رسانی کنید.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
          {ContactUsItems.map((item) => (
            <ContactItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              to={item.path}
            />
          ))}
        </div>
        <div className="rounded-3xl mt-8 py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
