import { IProduct } from "../../../interfaces/product";
import React, { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { StyledFormContainer } from "./styles";

interface IEditProductFormProps {
  product: IProduct;
  onSave: (editedProduct: IProduct) => void;
}

const EditProductForm: React.FC<IEditProductFormProps> = ({
  product,
  onSave,
}) => {
  const [name, setName] = useState(product.name);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const onClickSaveBtn = () => {
    if (!name.length) {
      return alert('Field "name" cannot be empty!');
    }

    onSave({ ...product, name });
  };

  return (
    <StyledFormContainer>
      <Input value={name} onChange={onChangeInput} />
      <Button onClick={onClickSaveBtn}>Save</Button>
    </StyledFormContainer>
  );
};

export default EditProductForm;
