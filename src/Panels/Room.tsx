import { observer } from "mobx-react-lite";
import { GoBackIcon } from "../assets/svg";
import Header from "../Components/Generic/Header";
import RoomTab from "../Components/Room/RoomTab";
import RoomProducts from "../Components/Room/RoomProducts";
import RoomSetting from "../Components/Room/RoomSetting";
import store from "../store";
import { RoomTabEnum } from "../types/room";

const Room = observer(() => {
  const currentRoomTab = store.room.currentRoomTab;

  const getCurrentTabComponent = () => {
    switch (currentRoomTab) {
      case RoomTabEnum.setting:
        return <RoomSetting />;
      case RoomTabEnum.product_list:
        return <RoomProducts />;
    }
  };

  return (
    <div className="panel">
      <Header>
        <GoBackIcon />
        <div className="header__title_white">Новая комната</div>
        <div></div>
      </Header>
      <RoomTab firstTabName="Настройки" secondTabName="Товары" />
      {getCurrentTabComponent()}
    </div>
  );
});

export default Room;
