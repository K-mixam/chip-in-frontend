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
            <MyInput title="Название комнаты" inputType="longInput"/>
            <MyInput title="Счёт для сбора" inputType="longInput"/>
            <MyInput title="Категории" inputType="longInput"/>
            <button className="text-button">Добавить категорию</button>
        </Container>
      </Content>
      <SingleButton name="Далее"/>
    </div>
  );
};

export default RoomSetting;
