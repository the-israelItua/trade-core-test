import { InputWrapper, InputItem, InputItemErrorWrapper } from "./styles";
import { Label } from "components/BookForm/styles";

const TextInput = ({
  label,
  name,
  value,
  onChange,
  disabled,
  error,
  placeholder,
  width,
  ...props
}) => {
  return (
    <InputWrapper width={width} disabled={disabled}>
      <Label>{label}</Label>
      <InputItem
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        value={value}
        {...props}
        onChange={onChange}
      />

      {error ? (
        <InputItemErrorWrapper>
          <span> {error} </span>
        </InputItemErrorWrapper>
      ) : null}
    </InputWrapper>
  );
};

export default TextInput;
