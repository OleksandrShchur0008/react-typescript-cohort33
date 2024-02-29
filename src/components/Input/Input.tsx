import { InputProps } from "./types";
import { InputContainer, InputComponent, InputLabel } from "./styles";

function Input({
  id,
  disabled = false,
  name,
  placeholder,
  label,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <InputContainer>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
      />
    </InputContainer>
  );
}

export default Input;
