import Table from "../components/Table";
import Button from "../components/Button";
import React, { useMemo, useReducer, useState } from "react";
import Modal from "../components/Modal";
import { pricePlanReducer, initialState } from "../reducers/pricePlanReducer";
import { IPricePlan } from "../interfaces/pricePlan";
import EditPricePlanForm from "../modules/pricePlans/EditPricePlanForm";
import { formatDate } from "../utils/date";
import FilterPricePlans from "../modules/pricePlans/FilterPricePlans";

const PricePlansPage = () => {
  const [state, dispatch] = useReducer(pricePlanReducer, initialState);
  const [currentPricePlan, setCurrentPricePlan] = useState<IPricePlan | null>(
    null,
  );
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>("");

  const onChangeModalVisibility = () =>
    setIsOpenModal((prevState) => !prevState);

  const onClickEditBtn = (price: IPricePlan) => {
    setCurrentPricePlan(price);
    onChangeModalVisibility();
  };

  const onClickSaveBtn = (payload: IPricePlan) => {
    dispatch({ type: "EDIT_PRICE_PLAN", payload });
    onChangeModalVisibility();
  };

  const filteredPricePlans = useMemo(() => {
    return state.pricePlans.filter((pricePlan) =>
      pricePlan.description.toLowerCase().includes(filterText.toLowerCase()),
    );
  }, [filterText, state.pricePlans]);

  return (
    <div style={{ width: 900 }}>
      <FilterPricePlans onFilter={setFilterText} />
      <Table
        data={filteredPricePlans}
        renderCustomHeaderCell={(key) => {
          if (key === "action") return <></>;
        }}
        renderCustomBodyCell={(key, value, row) => {
          if (key === "createdAt" || key === "removedAt") {
            return formatDate(value as string);
          }

          if (key === "action") {
            return (
              <Button onClick={() => onClickEditBtn(row as IPricePlan)}>
                Edit
              </Button>
            );
          }
        }}
      />
      <Modal isOpen={isOpenModal} onClose={onChangeModalVisibility}>
        {currentPricePlan && (
          <EditPricePlanForm
            pricePlan={currentPricePlan}
            onSave={onClickSaveBtn}
          />
        )}
      </Modal>
    </div>
  );
};

export default PricePlansPage;
