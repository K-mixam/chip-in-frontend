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
import { useFormState } from "../hooks/useFormState";
import useOneOrNoneSwitch from "../hooks/useOneOrNoneSwitch";

const ProductSetup: FC = () => {
  const [formValues, changeHandler] = useFormState({
    name: "",
    count: "",
    price: "",
  });

  const [choseCategoryId, chooseHandler] = useOneOrNoneSwitch(undefined);

  const submitHandler = () => {
    console.log("Count", !isNaN(formValues.count));
    console.log("Price", !isNaN(formValues.price));

    if (
      formValues.name.length &&
      formValues.count.length &&
      formValues.price.length &&
      !isNaN(formValues.count) &&
      !isNaN(formValues.price)
    ) {
      store.product.createProduct(
        {
          id: Date.now(),
          count: formValues.count,
          price: formValues.price,
          title: formValues.name,
        },
        choseCategoryId || "0"
      );
      store.app.setCurrentPanel(CurrentPanelEnum.room);
    } else {
      alert("Неправильно заполнена форма");
    }
  };

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
          <ChoosedCategories
            choseCategoryId={choseCategoryId}
            chooseHandler={chooseHandler}
          />
          <Input
            title="Название"
            fontWeight="normal"
            value={formValues.name}
            changeHandler={changeHandler}
            name="name"
          />
          <QuantityInput
            first={{ value: formValues.count }}
            second={{ value: formValues.price }}
            changeHandler={changeHandler}
          />
        </Container>
      </Content>
      <SingleButton name="Добавить" onClick={() => submitHandler()} />
    </Panel>
  );
};

export default ProductSetup;
