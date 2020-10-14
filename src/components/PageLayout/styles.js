import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem 1fr 100px;
  height: 100vh;
  ${ifProp(
    "noScroll",
    css`
      overflow-x: hidden;
    `
  )}
  overflow-y: auto;
`;

export const MenuPanel = styled.div`
  display: flex;
  /* width: 10rem; */
  /* margin-top: 5rem; */
  /* border: solid 1px var(--color-light-gray);
  border-top: none; */
  /* position: fixed; */
  /* left: 0; */
  height: 100%;
  /* top: 0; */
  /* z-index: 2; */
  /* background-color: white; */
  /* padding-top: 2rem; */
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 10px;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-sky);
  }
  &:after {
    width: 5px;
    border-radius: 50%;
    height: 5px;
    background-color: var(--color-pink);

    ${ifProp(
      "selected",
      css`
        content: "";
      `
    )}
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px var(--color-light-gray);
  z-index: 3;
  background-color: var(--color-sky);
  padding: 10px;
  color: var(--color-altblack);
`;

export const Content = styled.div`
  display: flex;
  ${ifProp(
    "center",
    css`
      justify-content: center;
    `
  )}
`;

export const Footer = styled.div`
  border: solid 1px var(--color-light-gray);
  z-index: 3;
  background-color: var(--color-white);
`;
