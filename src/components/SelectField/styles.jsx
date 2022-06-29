import styled from "styled-components";

const DropDownContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  margin-bottom: 2rem;
  position: relative;
  @media ${({ theme }) => `${theme.media.sm}`} {
    width: 100%;
  }
`;

const DropDownHeader = styled.div`
  border-radius: 0.2rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.grey100};
  font-size: 1em;
  height: 50px;
  width: 100%;
  padding: 0 1rem;
  letter-spacing: 0.1rem;
  padding-top: 1rem;
  position: relative;
  &:focus {
    border: 1px solid black;
  }

  svg {
    position: absolute;
    right: 1rem;
    top: 0.7rem;
  }
`;

const DropDownListContainer = styled.div``;

const PlaceText = styled.p`
  color: ${({ theme }) => theme.colors.grey100};
`;

const DropDownList = styled.ul`
  position: absolute;
  z-index: 10;
  width: 100%;
  margin: 0;
  padding: 1rem;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey200};

  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey300};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.grey300};
  }
`;

export {
  DropDownContainer,
  DropDownHeader,
  PlaceText,
  DropDownList,
  DropDownListContainer,
  ListItem,
};
