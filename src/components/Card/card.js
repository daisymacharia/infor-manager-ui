import React from "react";
import { CardWrapper } from "./styles";

const Card = ({ children, height, noPadding, bgColor }) => {
  return (
    <CardWrapper noPadding={noPadding} height={height} bgColor={bgColor}>
      {children}
    </CardWrapper>
  );
};
export default Card;
