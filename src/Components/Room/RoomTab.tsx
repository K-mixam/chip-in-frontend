import { observer } from "mobx-react-lite";
import { FC } from "react";
import store from "../../store";
import { RoomEditTabEnum } from "../../types/room";
import "./RoomTab.scss";

interface RoomTabProps {
  firstTabName: string;
  secondTabName: string;
}

interface RoomTabItemProps {
  name: string;
  className: string;
  clickHandler: () => void;
}

const RoomTab: FC<RoomTabProps> = observer(
  ({ firstTabName, secondTabName }) => {
    const { currentRoomTab } = store.room;

    const getTabClass = (roomTab: RoomEditTabEnum) => {
      return currentRoomTab === roomTab
        ? "switch-button__item_selected"
        : "switch-button__item";
    };

    return (
      <div className="switch-button">
        <RoomTabItem
          name={firstTabName}
          className={getTabClass(RoomEditTabEnum.setting)}
          clickHandler={() => store.room.setCurrentRoomTab(RoomEditTabEnum.setting)}
        />
        <RoomTabItem
          name={secondTabName}
          className={getTabClass(RoomEditTabEnum.product_list)}
          clickHandler={() =>
            store.room.setCurrentRoomTab(RoomEditTabEnum.product_list)
          }
        />
      </div>
    );
  }
);

const RoomTabItem: FC<RoomTabItemProps> = ({
  name,
  className,
  clickHandler,
}) => {
  return (
    <button className={className} onClick={clickHandler}>
      {name}
    </button>
  );
};

export default RoomTab;
