import Header from "../Components/Generic/Header";
import { FC } from "react";
import { GoBackIcon } from "../assets/svg";
import Container from "../Components/Generic/Container";
import Content from "../Components/Generic/Content";
import SingleButton from "../Components/Generic/SingleButton";
import ChoosedCategories from "../Components/Category/ChoosedCategories";
import { Input, QuantityInput } from "../Components/Generic/MyInput";
import Panel from "../Components/Generic/Panel";
import store from "../store";
import { CurrentPanelEnum } from "../types/app";

const ProductSetup: FC = () => {
  return (
    <Panel>
      <Header>
        <div onClick={() => store.app.setCurrentPanel(CurrentPanelEnum.room)}>
          <GoBackIcon />
        </div>
        <div className="header__title_white">Добавить товар</div>
        <div></div>
      </Header>
      <Content>
        <Container>
          <ChoosedCategories />
          <Input title="Название" />
          <QuantityInput />
        </Container>
      </Content>
      <SingleButton name="Добавить" />
    </Panel>
  );
};

export default ProductSetup;
