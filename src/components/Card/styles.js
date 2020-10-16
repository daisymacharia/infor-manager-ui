import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${ifProp("noPadding", 0, "1rem 2rem")};
  border-radius: 7px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border: solid 1px var(--color-light-gray);
  background-color: ${ifProp("bgColor", "var( --color-altdark)", "none")};

  ${ifProp(
    "height",
    css`
      height: 250px;
    `
  )}

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 1rem;
  }
`;
