import styled from "styled-components";
import { ifProp } from "styled-tools";
import { Field } from "formik";

export const InputWrapper = styled.div`
  --color-gray: #ccc;
  --color-placeholder: #666;
  --color-black: #111;

  display: block;
  width: 100%;

  &:not(:first-child) {
    margin-top: ${ifProp("noMarginTop", 0, "30px")};
  }
`;

export const InputField = styled(Field)`
  border: 1px solid ${ifProp("error", "var(--color-red)", "var(--color-gray)")};
  border-radius: 2px;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border: 1px solid var(--color-sky);
    background-color: rgba(74, 191, 226, 0.1);
  }
  &::last-child {
    margin-bottom: 20px;
  }
`;

export const Label = styled.p`
  margin-bottom: 7px;
`;

export const Error = styled.h3`
  color: var(--color-red);
  font-weight: normal;
`;

export const Subscript = styled.h3`
  color: var(--color-gray);
  font-weight: normal;
`;
