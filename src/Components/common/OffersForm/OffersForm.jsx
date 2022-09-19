import React from 'react';
import { Button } from '../button-component/button.component';

const OffersForm = () => {
  return (
    <div className="form">
      <label htmlFor="email">ایمیل:</label>
      <input
        className="rounded-lg my-3 py-2 px-2 border border-gray-400 hover:border-lite-purple bg-transparent input"
        id="email"
        type="text"
        placeholder="ایمیل خود را وارد کنید.."
      />
      <textarea
        className="rounded-lg py-2 px-2 mb-3 max-h-64 border border-gray-400 hover:border-lite-purple bg-transparent input"
        cols="40"
        rows="10"
        placeholder="متن خود را وارد کنید..."
      />
      <Button classButton="btn btn-primary w-full">ارسال</Button>
    </div>
  );
};

export default OffersForm;
