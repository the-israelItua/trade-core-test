import styled from "styled-components";

const Button = styled.button`
  position: relative;
  border-radius: 0.5rem;
  background: ${(props) =>
    props.active ? props.theme.colors.grey200 : "white"};
  color: ${(props) => (props.active ? "white" : props.theme.colors.grey100)};
  height: 3rem;
  min-width: ${(props) => props.width || "8rem"};
  border: ${(props) =>
    `1px solid ${
      props.active ? props.theme.colors.grey200 : props.theme.colors.grey100
    }`};
  cursor: pointer;

  svg {
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;
  }
`;

export { Button };
