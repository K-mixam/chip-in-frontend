import { observer } from "mobx-react-lite";
import { FC } from "react";
import store from "../../store";
import { RoomTabEnum } from "../../types/room";
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

    const getTabClass = (roomTab: RoomTabEnum) => {
      return currentRoomTab === roomTab
        ? "switch-button__item_selected"
        : "switch-button__item";
    };

    return (
      <div className="switch-button">
        <RoomTabItem
          name={firstTabName}
          className={getTabClass(RoomTabEnum.setting)}
          clickHandler={() => store.room.setCurrentRoomTab(RoomTabEnum.setting)}
        />
        <RoomTabItem
          name={secondTabName}
          className={getTabClass(RoomTabEnum.product_list)}
          clickHandler={() =>
            store.room.setCurrentRoomTab(RoomTabEnum.product_list)
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
