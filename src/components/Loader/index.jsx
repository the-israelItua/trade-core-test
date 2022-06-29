import { FaSpinner } from "react-icons/fa";
import { Wrapper } from "./styles";

const Loader = () => (
  <Wrapper>
    <FaSpinner aria-label="loading" />
  </Wrapper>
);

export default Loader;
