import Container from "../Generic/Container";
import Content from "../Generic/Content";
import MyInput from "../Generic/MyInput";
import SingleButton from "../Generic/SingleButton";
import "./RoomSetting.scss";

const RoomSetting = () => {
  return (
    <div className="panel">
      <Content>
        <Container>
            <MyInput title="Название комнаты" inputType="Input"/>
            <MyInput title="Счёт для сбора" inputType="Input"/>
            <MyInput title="Категории" inputType="categoryInput"/>
            <button className="text-button">Добавить категорию</button>
        </Container>
      </Content>
      <SingleButton name="Далее"/>
    </div>
  );
};

export default RoomSetting;
