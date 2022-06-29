import styled from "styled-components";

const PageWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Container = styled.div`
  margin: 5rem;
  position: relative;
  border: 1px solid grey;
  border-radius: 0.8rem;
  width: 50vw;
  min-height: 45vh;
  padding: 1rem 1rem 8rem;

  @media ${({ theme }) => `${theme.media.sm}`} {
    width: 100%;
    margin: 1rem;
  }
`;

const HeaderText = styled.h4`
  color: ${(props) => props.theme.colors.grey200};
  font-size: 1rem;
`;

export { PageWrapper, Container, HeaderText };
