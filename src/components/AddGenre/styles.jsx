import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 1rem;
    height: 1rem;
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.grey100};
  font-size: 1em;
  margin-left: 1rem;
`;

export { FooterWrapper, FooterText };
