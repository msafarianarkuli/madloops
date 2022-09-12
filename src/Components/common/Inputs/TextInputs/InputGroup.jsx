import React from 'react';
import { useField } from 'formik';
import { BsPerson } from 'react-icons/bs';
const InputGroups = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div>
        {label ? (
          <label className="text-gray-600 inline-block mb-2 text-lg">
            {label}
          </label>
        ) : null}

        <div
          className="flex items-center bg-neutral-200 rounded-lg border-2 border-neutral-200
           text-gray-600 focus-within:text-[#673CC0] focus-within:bg-white
            focus-within:border-[#673CC0] focus-within:border-2
            transition ease-in duration-200"
        >
          <div className="flex items-center rounded-tr-lg rounded-br-lg  text-2xl min-h-[40px] bg-transparent px-2">
            <BsPerson />
          </div>
          <input
            {...props}
            {...field}
            className="rounded-tl-lg rounded-bl-lg py-2 bg-transparent outline-none w-full text-gray-600"
          />
        </div>
        <div className="text-red-500 h-[20px] mb-1">
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default InputGroups;
