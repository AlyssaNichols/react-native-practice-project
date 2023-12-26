import React from "react";
import AppTextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

export default function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...otherProps}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
}
