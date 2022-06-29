import styled from "styled-components";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.2rem;

  @media ${({ theme }) => `${theme.media.sm}`} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.8rem;
  }
`;

export { List };
