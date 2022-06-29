import { InputWrapper, TextAreaItem, InputItemErrorWrapper } from "./styles";
import { Label } from "components/BookForm/styles";

const TextArea = ({
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
      <TextAreaItem
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

export default TextArea;
