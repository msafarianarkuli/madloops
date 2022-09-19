import React from 'react';
import { useField } from 'formik';

const Textarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label
        htmlFor={props.name}
        className="text-gray-600 inline-block mb-2 text-lg"
      >
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        id={props.name}
        rows="10"
        cols="20"
        className="rounded-lg py-2 bg-neutral-200 outline-none w-full max-h-64 px-4 border-2 border-neutral-200 focus:border-[#673CC0] focus:bg-white"
      />
      <div className="text-red-500 h-[20px] mb-2">
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Textarea;
