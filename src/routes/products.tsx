import Table from "../components/Table";
import { IProduct, IProductOptions } from "../interfaces/products";
import Button from "../components/Button";
import React, { useReducer, useState } from "react";
import Modal from "../components/Modal";
import { productReducer, initialState } from "../reducers/productReducer";

const ProductsPage = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onChangeModalVisibility = () =>
    setIsOpenModal((prevState) => !prevState);

  const onClickEditBtn = (product: IProduct) => {
    setCurrentProduct(product);
    onChangeModalVisibility();
  };

  const onClickSaveBtn = (payload: IProduct) => {

    if (currentProduct?.name.length === 0) {
      return alert('Field "name" cannot be empty!');
    }

    dispatch({ type: "EDIT_PRODUCT", payload });
    onChangeModalVisibility();
  };

  /**
   * Привел примеры рендеринга кастомных ячеек.
   * Все кастомно рендерить не стал
   */
  return (
    <>
      <Table
        data={state.products}
        renderCustomHeaderCell={(key) => {
          if (key === "action") return <></>;

          if (key === "options") return "Характеристики";
        }}
        renderCustomBodyCell={(key, value, row) => {
          if (key === "createdAt") {
            const date = new Date(value as string);

            return `
            ${date.getDate().toString().padStart(2, "0")}.${date.getMonth().toString().padStart(2, "0")}.${date.getFullYear()}${" "}
            ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
          }

          if (key === "options") {
            const optionsData = value as IProductOptions;

            return `Size: ${optionsData.size}, Amount: ${optionsData.amount}`;
          }

          if (key === "action") {
            return (
              <Button onClick={() => onClickEditBtn(row as IProduct)}>
                Edit
              </Button>
            );
          }
        }}
      />
      <Modal isOpen={isOpenModal} onClose={onChangeModalVisibility}>
        {currentProduct && (
          <EditProductForm product={currentProduct} onSave={onClickSaveBtn} />
        )}
      </Modal>
    </>
  );
};

/**
 * Не стал выносить в отдельный компонент в рамках тестового
 */

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
    onSave({ ...product, name });
  };

  return (
    <>
      <input value={name} onChange={onChangeInput} />
      <Button onClick={onClickSaveBtn}>Save</Button>
    </>
  );
};

export default ProductsPage;
