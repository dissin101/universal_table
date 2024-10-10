import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Container } from "./styles";

interface IFilterPagesProps {
  onFilter: (title: string) => void;
}

const FilterPages: React.FC<IFilterPagesProps> = ({ onFilter }) => {
  const [title, setTitle] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const onClickFilterButton = () => onFilter(title);

  return (
    <Container>
      <Input placeholder={"title"} value={title} onChange={onChangeInput} />
      <Button onClick={onClickFilterButton}>Filter</Button>
    </Container>
  );
};

export default FilterPages;
