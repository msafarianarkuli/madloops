import React from 'react';
import { useField } from 'formik';

const Textarea = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  const { name } = props;
  return (
    <div>
      {label ? (
        <label
          htmlFor={name}
          className="text-gray-600 inline-block mb-2 text-lg"
        >
          {label}
        </label>
      ) : null}
      <textarea
        {...field}
        {...props}
        id={name}
        rows="10"
        cols="40"
        className={className}
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
