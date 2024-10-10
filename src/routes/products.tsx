import Table from "../components/Table";
import { IProduct, IProductOptions } from "../interfaces/products";
import Button from "../components/Button";
import React, {useMemo, useReducer, useState} from "react";
import Modal from "../components/Modal";
import { productReducer, initialState } from "../reducers/productReducer";
import EditProductForm from "../modules/products/EditProductForm";
import FilterProducts from "../modules/products/FilterProducts";

const ProductsPage = () => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>("");

  const onChangeModalVisibility = () =>
    setIsOpenModal((prevState) => !prevState);

  const onClickEditBtn = (product: IProduct) => {
    setCurrentProduct(product);
    onChangeModalVisibility();
  };

  const onClickSaveBtn = (payload: IProduct) => {
    dispatch({ type: "EDIT_PRODUCT", payload });
    onChangeModalVisibility();
  };

  const filteredProducts = useMemo(() => {
    return state.products.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [filterText, state.products]);

  /**
   * Привел примеры рендеринга кастомных ячеек.
   * Все кастомно рендерить не стал
   */
  return (
    <div style={{width: 800}}>
      <FilterProducts onFilter={setFilterText}/>
      <Table
        data={filteredProducts}
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
    </div>
  );
};

export default ProductsPage;
