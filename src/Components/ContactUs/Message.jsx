import React from 'react';
import { BsEnvelopeFill, BsTelephoneFill } from 'react-icons/bs';

const Message = () => {
  return (
    <div className="grid grid-cols-2 py-12">
      <div className="flex justify-evenly  bg-[#7F56DA] rounded-2xl py-14 mx-10">
        <div className="flex items-center text-white">
          <BsTelephoneFill className="text-3xl mb-3 ml-3" />
          <p>تلفن تماس</p>
        </div>

        <div>
          <p className="text-white">
            <bdo dir="ltr">+9801133221144</bdo>
          </p>
          <p className="text-white">
            <bdo dir="ltr">+9801133221144</bdo>
          </p>
        </div>
      </div>
      <div className="flex justify-evenly bg-[#7F56DA] rounded-2xl py-14 mx-10">
        <div className="flex items-start text-white">
          <BsEnvelopeFill className="text-3xl text-white mb-3 ml-3" />
          <p>ایمیل پژوهشگاه</p>
        </div>
        <div>
          <p className="text-white">Sepehr.Sari@gmail.com</p>
          <p className="text-white">Bahr.academy@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
