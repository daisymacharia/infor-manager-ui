import styled from "styled-components";
import { ifProp } from "styled-tools";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 30px;
  width: ${ifProp("width", "150px", "100%")};
  background-color: var(--color-sky);
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
`;
