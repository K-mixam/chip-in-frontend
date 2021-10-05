import { FC } from "react";
import Container from "../Components/Generic/Container";
import RoomList from "../Components/Room/RoomList";
import Header from "../Components/Generic/Header";
import "./Home.scss";
import "../Components/Generic/Header.scss";
import app_logo from "../assets/img/logo.png";
import account_avatar from "../assets/img/login.png";
import RoomDisplayControl from "../Components/Room/RoomDisplayControl";
import BigRedButton from "../Components/Generic/BigRedButton";

const Home: FC = () => {
  return (
    <div className="panel">
      <Header>
        <div className="header__log-icon">
          <img src={app_logo} alt="" width="35px"></img>
        </div>
        <div className="header__item header__item_red">1793p</div>
        <div className="header__acc-icon">
          <img src={account_avatar} alt="" width="45px"></img>
        </div>
      </Header>
      <div className="content">
        <Container>
          <RoomDisplayControl />
          <RoomList />
        </Container>
      </div>
      <BigRedButton />
    </div>
  );
};

export default Home;
