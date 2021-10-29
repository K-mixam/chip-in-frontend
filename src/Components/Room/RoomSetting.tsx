import { useState } from "react";
import { useFormState } from "../../hooks/useFormState";
import store from "../../store";
import { RoomTabEnum } from "../../types/room";
import Container from "../Generic/Container";
import Content from "../Generic/Content";
import { CategoryInput, Input, Textarea } from "../Generic/MyInput";
import SingleButton from "../Generic/SingleButton";
import "./RoomSetting.scss";

const RoomSetting = () => {
  const [formValues, changeHandler] = useFormState({
    name: "",
  });

  const [textareaValue, setTextareaValue] = useState("");

  const [categoryValues, setCategoryValues] = useState([""]);

  const submitHandler = () => {
    console.log(formValues);
    console.log(textareaValue);
    console.log(categoryValues);
    if (formValues.name && store.user.user) {
      store.room.create({
        id: Date.now(),
        title: formValues.name,
        date: Date.now(),
        people_number: 0,
        owner: store.user.user.id,
        amount: 0,
      });
      store.room.setCurrentRoomTab(RoomTabEnum.product_list);
    } else {
      alert("Заполните все поля");
    }
  };

  return (
    <>
      <Content>
        <Container>
          <Input
            title="Название комнаты"
            name="name"
            value={formValues.name}
            changeHandler={changeHandler}
          />
          <Textarea
            labelText="Счёт для сбора"
            defaultValue=""
            changeHandler={setTextareaValue}
          />
          <CategoryInput
            title="Категории"
            categoryValues={categoryValues}
            setCategoryValues={setCategoryValues}
          />
          <button className="text-button">Добавить категорию</button>
        </Container>
      </Content>
      <SingleButton name="Далее" onClick={() => submitHandler()} />
    </>
  );
};

export default RoomSetting;
