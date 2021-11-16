import Panel from "../Components/Generic/Panel";
import Header from "../Components/Generic/Header";
import { GoBackIcon } from "../assets/svg";
import RoomTab from "../Components/Room/RoomTab";
import store from "../store"
import { RoomGuestTabEnum } from "../types/room";
import ProductSelect from "../Components/Tracking/ProductSelect";
import ChipInData from "../Components/Tracking/ChipInData";


const GuestPanel = () => {

    const currentRoomTab = store.room.currentGuestPanelTab;

    const getCurrentTabComponent = () => {
        switch (currentRoomTab) {
        case RoomGuestTabEnum.product_select:
            return <ProductSelect/>;
        case RoomGuestTabEnum.report:
            return <ChipInData/>;
        }
    };
    return(
        <Panel>
            <Header>
                <div >
                    <GoBackIcon />
                </div>
                <div className="header__title_white">Выпускной</div>
                <div></div>
            </Header>
            <RoomTab firstTabName="Товары" secondTabName="Отчет" />
            {getCurrentTabComponent()}
        </Panel>
    );
};

export default GuestPanel;