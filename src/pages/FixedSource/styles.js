import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";

export const JokesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 10rem);
  grid-gap: 1rem;
  margin: 30px;
  padding: 1rem;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 10rem);
  }
`;

export const JokeSetup = styled.div`
  margin: 0 2rem;
  color: var(--color-altblack);
`;

export const JokePunchline = styled.div`
  display: none;
  margin: 0 2rem;
  color: var(--color-gray);
  ${ifProp(
    "show",
    css`
      display: block;
    `
  )}
`;
