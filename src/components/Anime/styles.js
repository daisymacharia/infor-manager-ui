import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  transform: 50%;
  border-radius: 7px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const ImageWrapper = styled.div`
  height: 100px;
  border-radius: 7px;
`;

export const AnimeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 10px;
  height: 100%;
  color: var(--color-white);

  span {
    display: flex;
    font-size: 12px;
    color: var(--color-light-gray);
  }
`;

export const Title = styled.h3`
  font-weight: bold;
`;

export const Year = styled.h3`
  font-weight: 100;
  margin-right: 1rem;
`;

export const Genre = styled.h3`
  font-weight: 100;
  margin-left: 1rem;
`;

export const Rating = styled.h3`
  font-size: 12px;
  font-weight: 100;
  color: var(--color-light-gray);
`;

// export const Synopsis = styled.p`
//   width: 100%;
//   height: 10px;
//   text-overflow: ellipsis;
//   font-size: 12px;
//   font-weight: 100;
//   color: var(--color-light-gray);
// `;
