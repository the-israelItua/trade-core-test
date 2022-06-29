import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 0.2rem;
  width: ${({ width }) => (width ? width : "100%")};
  position: relative;

  input {
    height: 3.125rem;
  }

  @media ${({ theme }) => `${theme.media.sm}`} {
    width: 100%;
  }
`;

const InputItemErrorWrapper = styled.div`
  margin: -1.8rem 0 2rem;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9em;
  line-height: 150%;
  color: red;
`;

const InputItem = styled.input`
  border-radius: 0.2rem;
  outline: none;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  font-size: 1em;
  height: 3.125rem;
  width: 100%;
  padding: 0 1rem;
  letter-spacing: 0.1rem;
  &:focus {
    border: 1px solid black;
  }
`;

const TextAreaItem = styled.textarea`
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  font-size: 1em;
  height: 6rem;
  width: 100%;
  padding: 1rem;
  letter-spacing: 0.1rem;
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  &:focus {
    border: 1px solid black;
  }
`;

export { InputItem, InputItemErrorWrapper, InputWrapper, TextAreaItem };
