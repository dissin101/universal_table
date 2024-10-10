import React, { SelectHTMLAttributes } from "react";
import { StyledSelect } from "./styles";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select: React.FC<ISelectProps> = (props) => {
  return <StyledSelect {...props} />;
};

export default Select;
