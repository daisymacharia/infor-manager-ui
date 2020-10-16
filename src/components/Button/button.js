import React from "react";
import { StyledButton } from "./styles";

const Button = ({ text, onClick, width, marginTop }) => {
  return (
    <StyledButton width={width} onClick={onClick} marginTop={marginTop}>
      {text}
    </StyledButton>
  );
};

export default Button;
