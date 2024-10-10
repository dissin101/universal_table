import Table from "../components/Table";
import Button from "../components/Button";
import React, { useMemo, useReducer, useState } from "react";
import Modal from "../components/Modal";
import { formatDate } from "../utils/date";
import { pageReducer, initialState } from "../reducers/pageReducer";
import { IPage } from "../interfaces/page";
import EditPageForm from "../modules/pages/EditPageForm";
import FilterPages from "../modules/pages/FilterPages";

const PagesPage = () => {
  const [state, dispatch] = useReducer(pageReducer, initialState);
  const [currentPage, setCurrentPage] = useState<IPage | null>(null);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<boolean | undefined>(
    undefined,
  );

  const onChangeModalVisibility = () =>
    setIsOpenModal((prevState) => !prevState);

  const onClickEditBtn = (page: IPage) => {
    setCurrentPage(page);
    onChangeModalVisibility();
  };

  const onClickSaveBtn = (payload: IPage) => {
    dispatch({ type: "EDIT_PAGE", payload });
    onChangeModalVisibility();
  };

  const filteredPricePlans = useMemo(() => {
    return state.pages
      .filter((page) =>
        page.title.toLowerCase().includes(filterText.toLowerCase()),
      )
      .filter((product) =>
        filterStatus === undefined ? true : product.active === filterStatus,
      );
  }, [filterText, filterStatus, state.pages]);

  return (
    <div style={{ width: 900 }}>
      <FilterPages
        onFilterTitle={setFilterText}
        onFilterStatus={setFilterStatus}
      />
      <Table
        data={filteredPricePlans}
        renderCustomHeaderCell={(key) => {
          if (key === "action") return <></>;
        }}
        renderCustomBodyCell={(key, value, row) => {
          if (key === "updatedAt" || key === "publishedAt") {
            return formatDate(value as string);
          }

          if (key === "action") {
            return (
              <Button onClick={() => onClickEditBtn(row as IPage)}>Edit</Button>
            );
          }
        }}
      />
      <Modal isOpen={isOpenModal} onClose={onChangeModalVisibility}>
        {currentPage && (
          <EditPageForm page={currentPage} onSave={onClickSaveBtn} />
        )}
      </Modal>
    </div>
  );
};

export default PagesPage;
