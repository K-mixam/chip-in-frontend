import { FC } from "react";
import Container from "../Components/Generic/Container";
import RoomList from "../Components/Room/RoomList";
import Header from "../Components/Generic/Header";
import "./Home.scss";
import "../Components/Generic/Header.scss";
import SingleButton from "../Components/Generic/SingleButton";
import { AppLogoIcon } from "../assets/svg";
import RoomFilter from "../Components/Room/RoomFilter";
import Content from "../Components/Generic/Content";
import Panel from "../Components/Generic/Panel";
import store from "../store";
import { CurrentPanelEnum } from "../types/app";
import { RoomTabEnum } from "../types/room";

const Home: FC = () => {
  const user = store.user.user;

  return (
    <Panel>
      <Header>
        <div className="header__log-icon">
          <AppLogoIcon />
        </div>
        <div className="header__title_red">1793p</div>
        <div className="header__acc-icon">
          <img
            src={user?.photo_100}
            alt="Avatar"
            className="header__user-avatar"
          />
        </div>
      </Header>
      <Content>
        <Container>
          <RoomFilter />
          <RoomList />
        </Container>
      </Content>
      <SingleButton
        name="Создать комнату"
        onClick={() => {
          store.app.setCurrentPanel(CurrentPanelEnum.room);
          store.room.setCurrentRoomTab(RoomTabEnum.setting);
        }}
      />
    </Panel>
  );
};

export default Home;
