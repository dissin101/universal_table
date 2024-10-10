import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Container } from "./styles";

interface IFilterPricePlansProps {
  onFilter: (description: string) => void;
}

const FilterPricePlans: React.FC<IFilterPricePlansProps> = ({ onFilter }) => {
  const [description, setDescription] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  const onClickFilterButton = () => onFilter(description);

  return (
    <Container>
      <Input placeholder={"description"} value={description} onChange={onChangeInput} />
      <Button onClick={onClickFilterButton}>Filter</Button>
    </Container>
  );
};

export default FilterPricePlans;
