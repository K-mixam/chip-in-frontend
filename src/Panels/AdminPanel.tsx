import Panel from "../Components/Generic/Panel";
import Header from "../Components/Generic/Header";
import { GoBackIcon } from "../assets/svg";
import RoomTab from "../Components/Room/RoomTab";
import store from "../store";
import { RoomAdminTabEnum } from "../types/room";
import GuestsTracking from "../Components/Tracking/GuestsTracking";
import ProductTracking from "../Components/Tracking/ProductTracking";



const AdminPanel = () => {

  const currentRoomTab = store.room.currentAdminPanelTab;

  const getCurrentTabComponent = () => {
    switch (currentRoomTab) {
      case RoomAdminTabEnum.guests_tracking:
        return <GuestsTracking/>;
      case RoomAdminTabEnum.product_tracking:
        return <ProductTracking/>;
    }
  };
    return(
        <Panel>
            <Header>
                <div >
                    <GoBackIcon />
                </div>
                <div className="header__title_white">Новая комната</div>
                <div></div>
            </Header>
            <RoomTab firstTabName="Товары" secondTabName="Отчет" />
            {getCurrentTabComponent()}
        </Panel>
    );
};

export default AdminPanel;