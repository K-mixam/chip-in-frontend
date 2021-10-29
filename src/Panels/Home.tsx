import { FC } from "react";
import Container from "../Components/Generic/Container";
import RoomList from "../Components/Room/RoomList";
import Header from "../Components/Generic/Header";
import "./Home.scss";
import "../Components/Generic/Header.scss";
import SingleButton from "../Components/Generic/SingleButton";
import { AppLogoIcon, DefaultUserAvatar } from "../assets/svg";
import RoomFilter from "../Components/Room/RoomFilter";
import Content from "../Components/Generic/Content";
import Panel from "../Components/Generic/Panel";

const Home: FC = () => {
  return (
    <Panel>
      <Header>
        <div className="header__log-icon">
          <AppLogoIcon />
        </div>
        <div className="header__title_red">1793p</div>
        <div className="header__acc-icon">
          <DefaultUserAvatar />
        </div>
      </Header>
      <Content>
        <Container>
          <RoomFilter />
          <RoomList />
        </Container>
      </Content>
      <SingleButton name="Создать комнату" />
    </Panel>
  );
};

export default Home;
