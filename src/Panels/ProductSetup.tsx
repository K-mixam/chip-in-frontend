import Header from "../Components/Generic/Header";
import { FC } from "react";
import { GoBackIcon } from "../assets/svg";
import Container from "../Components/Generic/Container";
import Content from "../Components/Generic/Content";
import SingleButton from "../Components/Generic/SingleButton";
import ChoosedCategories from "../Components/Category/ChoosedCategories";
import MyInput from "../Components/Generic/MyInput";
import Panel from "../Components/Generic/Panel";

const ProductSetup:FC = () => {
    return(
            <Panel>
                <Header>
                    <GoBackIcon/>
                    <div className="header__title_white">Добавить товар</div>
                    <div></div>
                </Header>
                <Content>
                    <Container>
                        <ChoosedCategories/>
                        <MyInput title="Название" inputType="Input"/>
                        <MyInput inputType="quantityInput" title=""/>
                    </Container>
                </Content>
                <SingleButton name="Добавить"/>
            </Panel>
    );
};

export default ProductSetup;