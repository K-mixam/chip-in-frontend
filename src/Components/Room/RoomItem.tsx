import { FC } from "react";
import { IRoom } from "../../types/room";
import "./RoomItem.scss";

interface RoomItemProps {
  room: IRoom;
}

const RoomItem: FC<RoomItemProps> = ({ room }) => {
  return (
    <div className="room">
      <div className="room__name">{room.title}</div>
      <div className="room__subtitle">
        <div className="room__description">
          <div className="room__description-data">
            {room.date} | {room.people_number} человек
          </div>
          <div className="room__description-owner">Ваша комната</div>
        </div>
        <div className="room__amount room__amount_red">{room.amount}</div>
      </div>
    </div>
  );
};

export default RoomItem;
