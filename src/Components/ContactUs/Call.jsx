import React from 'react';
import Input from './common/Input';
import Textarea from './common/Textarea';
import { Button } from '../common/button-component/button.component';
const Call = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Input label="نام و نام خانوادگی" id="name" />
          <Input label="ایمیل" id="email" />
          <Input label="شماره تماس" id="phone" />
        </div>
        <div>
          <Textarea label="پیام" id="message" />
        </div>
      </div>
      <Button
        classButton="border-2 rounded-xl text-base pt-2 pb-3 px-10 transition ease-out duration-300 border-[#8055D9]  bg-[#8055D9] text-white
        hover:bg-[#673CC0] hover:border-[#673CC0] hover:shadow-md mx-auto block"
      >
        ارسال پیام
      </Button>
    </>
  );
};

export default Call;
