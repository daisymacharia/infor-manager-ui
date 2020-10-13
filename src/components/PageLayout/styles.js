import styled from "styled-components";
import { ifProp } from "styled-tools";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 1fr 100px;
  height: 100vh;
`;

export const Header = styled.div`
  background-color: #ccc;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Footer = styled.div`
  background-color: #ccc;
`;
