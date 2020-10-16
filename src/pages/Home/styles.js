import styled from "styled-components";
import { Link } from "react-router-dom";

export const SyledLink = styled(Link)`
  height: 7rem;
  z-index: 3;
`;

export const Header = styled.h1`
  height: 5rem;
  font-size: 4rem;
  z-index: 3;
`;

export const HomeWrapper = styled.div`
  display: flex;
  background-color: #00334a;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #c8d5d6;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
  object-fit: fill;
  opacity: 0.5;
`;
