import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-radius: 7px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border: solid 1px var(--color-light-gray);
  /* background-color: var(--color-pink); */

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
