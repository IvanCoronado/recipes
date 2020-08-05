import { ErrorMessage, useField } from "formik";
import React from "react";

import {
  BaseInput,
  Container,
  Error,
  IconContainer,
  IconError,
  InputContainer,
  Label,
} from "./styles";

/* 
rightIcon?: React.ReactNode
label?: string
className?: string
disabled?: boolean
hideErrorHint?: boolean
*/

const Input = ({ label, className, rightIcon, ...props }) => {
  const [field, meta] = useField(props);
  const hasError = !!(meta.touched && meta.error);
  return (
    <Container className={className}>
      {label && <Label htmlFor={field.name}>{label}</Label>}
      <InputContainer>
        <BaseInput {...field} {...props} error={hasError} id={field.name} />
        {hasError && (
          <IconContainer>
            <IconError />
          </IconContainer>
        )}
        {rightIcon && !hasError && <IconContainer>{rightIcon}</IconContainer>}
      </InputContainer>
      <ErrorMessage component={Error} name={field.name} />
    </Container>
  );
};

export default Input;
