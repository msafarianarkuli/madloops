import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/colors/purple.css";

const CustomDatePicker = ({
  label,
  className,
  classForm,
  classLabel,
  ...props
}) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  console.log(field);
  return (
    <div className={classForm}>
      {label ? <label className={classLabel}>{label}</label> : null}
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="top-bottom"
        {...props}
        {...field}
        value={field.value || new Date()}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
        inputClass={className}
        containerStyle={{ width: "100%" }}
        className="purple"
      />

      <div className="text-red-500 h-[20px] mb-1">
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default CustomDatePicker;
