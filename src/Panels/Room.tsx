import { observer } from "mobx-react-lite";
import { GoBackIcon } from "../assets/svg";
import Header from "../Components/Generic/Header";
import RoomTab from "../Components/Room/RoomTab";
import RoomProducts from "../Components/Room/RoomProducts";
import RoomSetting from "../Components/Room/RoomSetting";
import store from "../store";
import { RoomEditTabEnum } from "../types/room";
import Panel from "../Components/Generic/Panel";
import { CurrentPanelEnum } from "../types/app";

const Room = observer(() => {
  const currentRoomTab = store.room.currentRoomTab;

  const getCurrentTabComponent = () => {
    switch (currentRoomTab) {
      case RoomEditTabEnum.setting:
        return <RoomSetting />;
      case RoomEditTabEnum.product_list:
        return <RoomProducts />;
    }
  };

  return (
    <Panel>
      <Header>
        <div onClick={() => store.app.setCurrentPanel(CurrentPanelEnum.home)}>
          <GoBackIcon />
        </div>
        <div className="header__title_white">Новая комната</div>
        <div></div>
      </Header>
      <RoomTab firstTabName="Настройки" secondTabName="Товары" />
      {getCurrentTabComponent()}
    </Panel>
  );
});

export default Room;
