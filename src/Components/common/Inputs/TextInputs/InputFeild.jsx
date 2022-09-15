import React from "react";
import { useField } from "formik";

const InputFeild = ({
  label,
  classInput,
  formLabel,
  name,
  classError,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={name} className={formLabel} {...props}>
        {label}
      </label>
      <input className={classInput} id={name} {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className={classError}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputFeild;
