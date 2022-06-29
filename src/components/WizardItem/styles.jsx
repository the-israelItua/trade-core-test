import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ItemStep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? props.theme.colors.grey200 : props.theme.colors.grey400};
  color: ${(props) => (props.active ? "white" : props.theme.colors.grey300)};
`;

const ItemText = styled.p`
  color: ${(props) =>
    props.active ? props.theme.colors.grey200 : props.theme.colors.grey400};
  font-size: ${(props) => props.fontSize};
  margin-top: 1rem; ;
`;

export { ItemWrapper, ItemText, ItemStep };
