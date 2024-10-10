import React, {useState} from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {Container} from "./styles";

interface IFilterProductsProps {
    onFilter: (name: string) => void
}

const FilterProducts: React.FC<IFilterProductsProps> = ({onFilter}) => {

    const [name, setName] = useState("");

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)

    const onClickFilterButton = () => onFilter(name)

    return <Container>
        <Input placeholder={'name'} value={name} onChange={onChangeInput}/>
        <Button onClick={onClickFilterButton}>Filter</Button>
    </Container>
}

export default FilterProducts
