import React from 'react';
import { BsPerson } from 'react-icons/bs';
const Input = ({ label, id }) => {
  return (
    <>
      <div className="mb-3">
        <label
          htmlFor={id}
          className="text-gray-600 inline-block mb-2 text-base"
        >
          {label}
        </label>
        <div className="flex items-center">
          <div className="flex items-center rounded-tr-lg rounded-br-lg text-2xl min-h-[40px] bg-neutral-200 text-neutral-500 px-2">
            <BsPerson />
          </div>
          <input
            id={label}
            type="text"
            className="rounded-tl-lg rounded-bl-lg py-2 bg-neutral-200 outline-none w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Input;
