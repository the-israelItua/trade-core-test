import styled from "styled-components";

const FormWrapper = styled.form`
  margin-top: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;

  > div:last-child {
    margin-left: 2rem;
  }

  @media ${({ theme }) => `${theme.media.sm}`} {
    display: block;
    > div:last-child {
      margin-left: 0;
    }
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.grey200};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 0.9em;
  line-height: 150%;
  margin-bottom: 0.1rem;
  font-weight: 700;
`;

export { FormWrapper, FormGroup, Label };
