import Container from "../Generic/Container";
import Content from "../Generic/Content";
import LongInput from "../Generic/LongInput";
import ShortInput from "../Generic/ShortInput";
import SingleButton from "../Generic/SingleButton";
import "./RoomSetting.scss";

const RoomSetting = () => {
  return (
    <div className="panel">
      <Content>
        <Container>
            <LongInput title="Название комнаты"/>
            <LongInput title="Счёт для сбора"/>
            <ShortInput title="Категории"/>
            <button className="text-button">Добавить категорию</button>
        </Container>
      </Content>
      <SingleButton name="Далее"/>
    </div>
  );
};

export default RoomSetting;
