import React, { InputHTMLAttributes } from "react";
import { StyledInput } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IInputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
