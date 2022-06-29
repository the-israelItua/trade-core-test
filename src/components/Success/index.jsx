import { BsCheckLg } from "react-icons/bs";
import { usePage } from "context/page-context";
import { Button } from "../Button";
import { Wrapper, IconContainer } from "./styles";

const Success = () => {
  const { setCurrentStep, setInitPages } = usePage();

  const handleClick = () => {
    setInitPages();
    setCurrentStep(1);
  };

  return (
    <Wrapper>
      <IconContainer>
        <BsCheckLg size={35} color="#818488" />
      </IconContainer>
      <p>Book added successfully</p>
      <Button onClick={handleClick} active width="50%">
        Add another book
      </Button>
    </Wrapper>
  );
};

export default Success;
