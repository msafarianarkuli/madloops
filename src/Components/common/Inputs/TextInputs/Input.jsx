import React from 'react';
import { useField } from 'formik';
const InputGroups = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {label ? (
        <label className="text-gray-600 block mb-2 text-lg">
          {label}
        </label>
      ) : null}
      <input {...props} {...field} className={className} />

      <div className="text-red-500 h-[20px] mb-1">
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

export default InputGroups;
