import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Container } from "./styles";
import Select from "../../../components/Select";

interface IFilterPagesProps {
  onFilterTitle: (title: string) => void;
  onFilterStatus: (status: boolean | undefined) => void;
}

const FilterPages: React.FC<IFilterPagesProps> = ({
  onFilterTitle,
  onFilterStatus,
}) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<boolean | undefined>(undefined);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value ? JSON.parse(e.target.value) : undefined);
  };

  const onClickFilterButton = () => {
    onFilterTitle(title);
    onFilterStatus(status);
  };

  return (
    <Container>
      <Input placeholder={"title"} value={title} onChange={onChangeInput} />
      <Select onChange={onChangeSelect}>
        <option value={""}>All</option>
        <option value={"true"}>Active</option>
        <option value={"false"}>Inactive</option>
      </Select>
      <Button onClick={onClickFilterButton}>Filter</Button>
    </Container>
  );
};

export default FilterPages;
