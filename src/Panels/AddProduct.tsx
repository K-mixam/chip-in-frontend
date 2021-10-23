import { Header } from "@vkontakte/vkui";
import { FC } from "react";
import { GoBackIcon } from "../assets/svg";
import CreatedCategories from "../Components/Category/CreatedCategories";
import AddProductInput from "../Components/Generic/AddProductInput";
import Container from "../Components/Generic/Container";
import Content from "../Components/Generic/Content";
import LongInput from "../Components/Generic/LongInput";
import SingleButton from "../Components/Generic/SingleButton";

const AddProduct:FC = () => {
    return(
            <>
                <Header>
                    <GoBackIcon/>
                    <div className="header__title_white">Добавить товар</div>
                    <div></div>
                </Header>
                <Content>
                    <Container>
                        <CreatedCategories/>
                        <LongInput title="Название"/>
                        <AddProductInput/>
                    </Container>
                </Content>
                <SingleButton name="Добавить"></SingleButton>
            </>
    );
};


export default AddProduct;