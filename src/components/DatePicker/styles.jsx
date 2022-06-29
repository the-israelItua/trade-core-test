import styled from "styled-components";

const Wrapper = styled.div`
  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
  }
  .react-datepicker__input-container input {
    border-radius: 0.2rem;
    outline: none;
    margin-bottom: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.grey100};
    font-size: 1em;
    height: 3.125rem;
    width: ${(props) => props.width || 100};
    padding: 0 1rem;
    letter-spacing: 0.1rem;
    &:focus {
      border: 1px solid black;
    }

    @media ${({ theme }) => `${theme.media.sm}`} {
      width: 100%;
    }
  }
`;

export { Wrapper };
