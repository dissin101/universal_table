import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Container } from "./styles";
import Select from "../../../components/Select";

interface IFilterProductsProps {
  onFilterName: (name: string) => void;
  onFilterStatus: (status: boolean | undefined) => void;
}

const FilterProducts: React.FC<IFilterProductsProps> = ({
  onFilterName,
  onFilterStatus,
}) => {
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<boolean | undefined>(undefined);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value ? JSON.parse(e.target.value) : undefined);
  };

  const onClickFilterButton = () => {
    onFilterName(name);
    onFilterStatus(status);
  };

  return (
    <Container>
      <Input placeholder={"name"} value={name} onChange={onChangeInput} />
      <Select onChange={onChangeSelect}>
        <option value={""}>All</option>
        <option value={"true"}>Active</option>
        <option value={"false"}>Inactive</option>
      </Select>
      <Button onClick={onClickFilterButton}>Filter</Button>
    </Container>
  );
};

export default FilterProducts;
