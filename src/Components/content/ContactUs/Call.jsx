import React from 'react';
import { BsEnvelopeFill, BsTelephoneFill } from 'react-icons/bs';

const Call = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12 text-lg">
      <div className="flex justify-evenly border-2 border-lite-purple rounded-lg py-14 lg:mx-10">
        <div className="flex items-center text-lite-purple">
          <BsTelephoneFill className="text-3xl mb-3 ml-3" />
          <p className="hidden sm:block">تلفن تماس</p>
        </div>
        <div>
          <p className="text-lite-purple">
            <bdo dir="ltr">+9801133221144</bdo>
          </p>
          <p className="text-lite-purple">
            <bdo dir="ltr">+9801133221144</bdo>
          </p>
        </div>
      </div>
      <div className="flex justify-evenly items-center border-2 border-lite-purple rounded-lg py-14 lg:mx-10 sm:px-5 xl:px-0">
        <div className="flex items-center text-lite-purple">
          <BsEnvelopeFill className="text-3xl text-lite-purple mt-2 mb-3 ml-3" />
          <p className="hidden sm:block">ایمیل پژوهشگاه</p>
        </div>
        <div className="text-left">
          <p className="text-lite-purple mb-2">Sepehr.Sari@gmail.com</p>
          <p className="text-lite-purple">Bahr.academy@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Call;
