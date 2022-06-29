import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;

  p {
    margin-bottom: 3rem;
  }
`;

const IconContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.grey400};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export { Wrapper, IconContainer };
