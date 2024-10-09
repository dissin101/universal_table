import React from "react";
import { StyledButton } from "./styles";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = (props) => {
  return <StyledButton {...props}></StyledButton>;
};

export default Button;
