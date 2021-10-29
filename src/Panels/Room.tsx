import { observer } from "mobx-react-lite";
import { GoBackIcon } from "../assets/svg";
import Header from "../Components/Generic/Header";
import RoomTab from "../Components/Room/RoomTab";
import RoomProducts from "../Components/Room/RoomProducts";
import RoomSetting from "../Components/Room/RoomSetting";
import store from "../store";
import { RoomTabEnum } from "../types/room";
import Panel from "../Components/Generic/Panel";


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
    <Panel>
      <Header>
        <GoBackIcon />
        <div className="header__title_white">Новая комната</div>
        <div></div>
      </Header>
      <RoomTab firstTabName="Настройки" secondTabName="Товары" />
      {getCurrentTabComponent()}
      
    </Panel>
  );
});

export default Room;
