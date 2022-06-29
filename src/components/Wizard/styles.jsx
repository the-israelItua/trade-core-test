import styled from "styled-components";

const WizardWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
  span {
    height: 0.1rem;
    width: 15%;
    background: grey;
    margin: 1.5rem;

    &:last-child {
      display: none;
    }
  }
`;

export { WizardWrapper };
