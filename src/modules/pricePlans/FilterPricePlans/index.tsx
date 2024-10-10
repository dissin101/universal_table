import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Container } from "./styles";
import Select from "../../../components/Select";

interface IFilterPricePlansProps {
  onFilterDescription: (description: string) => void;
  onFilterStatus: (status: boolean | undefined) => void;
}

const FilterPricePlans: React.FC<IFilterPricePlansProps> = ({
  onFilterDescription,
  onFilterStatus,
}) => {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<boolean | undefined>(undefined);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value ? JSON.parse(e.target.value) : undefined);
  };

  const onClickFilterButton = () => {
    onFilterDescription(description);
    onFilterStatus(status);
  };

  return (
    <Container>
      <Input
        placeholder={"description"}
        value={description}
        onChange={onChangeInput}
      />
      <Select onChange={onChangeSelect}>
        <option value={""}>All</option>
        <option value={"true"}>Active</option>
        <option value={"false"}>Inactive</option>
      </Select>
      <Button onClick={onClickFilterButton}>Filter</Button>
    </Container>
  );
};

export default FilterPricePlans;
