import React from 'react';
import { useField } from 'formik';
import { BsPerson } from 'react-icons/bs';
const InputGroups = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {label ? (
        <label className="text-gray-600 inline-block mb-2 text-lg">
          {label}
        </label>
      ) : null}
      <input
        {...props}
        {...field}
        className={className}
        //   ref={replyInput}
      />
      <div className="text-red-500 h-[20px] mb-1">
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

export default InputGroups;
