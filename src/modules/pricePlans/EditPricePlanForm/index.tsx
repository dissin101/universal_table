import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { StyledFormContainer } from "./styles";
import { IPricePlan } from "../../../interfaces/pricePlan";

interface IEditPricePlanFormProps {
  pricePlan: IPricePlan;
  onSave: (editedProduct: IPricePlan) => void;
}

const EditPricePlanForm: React.FC<IEditPricePlanFormProps> = ({
  pricePlan,
  onSave,
}) => {
  const [description, setDescription] = useState(pricePlan.description);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.currentTarget.value);
  };

  const onClickSaveBtn = () => {
    if (!description.length) {
      return alert('Field "description" cannot be empty!');
    }

    onSave({ ...pricePlan, description });
  };

  return (
    <StyledFormContainer>
      <Input value={description} onChange={onChangeInput} />
      <Button onClick={onClickSaveBtn}>Save</Button>
    </StyledFormContainer>
  );
};

export default EditPricePlanForm;
