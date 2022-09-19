import React from "react";
import { useFormikContext, useField } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phoneNumber.styles.scss";

const PhoneNumberField = ({ ...props }) => {
  const { classInput, classError, classForm, classLabel, label, name } = props;
  const { setFieldValue, handleBlur } = useFormikContext();
  const [field, meta] = useField(props);

  const onChange = (value) => {
    setFieldValue(field.name, value);
  };

  return (
    <div className={classForm}>
      <label className={classLabel} htmlFor={name}>
        {label}
      </label>

      <div dir="ltr">
        <PhoneInput
          name={name}
          inputProps={{ onBlur: handleBlur, name: name }}
          country={"ir"}
          inputClass={classInput}
          value={field.value}
          onChange={onChange}
          placeholder="+98 911 123 4567"
          {...props}
        />
      </div>
      {meta.touched && meta.error ? (
        <div className={classError}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default PhoneNumberField;

/*    
          
          

const FlagPhoneInput = ({ ...props }) => {
 
    const { styles, label, id, name, type, value, as } = props;

  return (
    <div className="">
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
     
      <div dir="ltr">
        <PhoneInput
          name={name}
          inputProps={{ onBlur: handleBlur, name: name }}
          country={"ir"}
          placeholder="+98 911 123 4567"
          dropdownClass=" bottom-full absolute"
          inputClass={styles.numField}
          value={field.value}
          onChange={onChange}
        />
      </div>
      <div className=" min-h-[1.5rem] ">
        <ErrorMessage component="a" className={styles.errorMsg} name={name} />
      </div>
    </div>
  );
};


*/
