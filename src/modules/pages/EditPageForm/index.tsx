import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { StyledFormContainer } from "./styles";
import { IPage } from "../../../interfaces/page";

interface IEditPageFormProps {
  page: IPage;
  onSave: (editedPage: IPage) => void;
}

const EditPageForm: React.FC<IEditPageFormProps> = ({ page, onSave }) => {
  const [title, setTitle] = useState(page.title);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onClickSaveBtn = () => {
    if (!title.length) {
      return alert('Field "title" cannot be empty!');
    }

    onSave({ ...page, title });
  };

  return (
    <StyledFormContainer>
      <Input value={title} onChange={onChangeInput} />
      <Button onClick={onClickSaveBtn}>Save</Button>
    </StyledFormContainer>
  );
};

export default EditPageForm;
