import React, { forwardRef } from "react";

// Styled Components;
import { InputWrapper, InputField, Label, Subscript } from "./styles";

const Input = (props, ref) => {
  const {
    label,
    name,
    error,
    className,
    inputSubscript,
    noMarginTop,
    ...rest
  } = props;

  return (
    <InputWrapper className={className} noMarginTop={noMarginTop}>
      <Label htmlFor={name}>{label}</Label>
      <InputField ref={ref} name={name} error={error} {...rest} />

      {inputSubscript && <Subscript htmlFor={name}>{inputSubscript}</Subscript>}
      {/* <Error>{error}</Error> */}
    </InputWrapper>
  );
};

export default forwardRef(Input);
