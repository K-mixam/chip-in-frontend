import { FC } from "react";
import { TickIcon } from "../../assets/svg";
import store from "../../store";
import { IRoom } from "../../types/room";
import "./RoomItem.scss";

interface RoomItemProps {
  room: IRoom;
}

const RoomItem: FC<RoomItemProps> = ({ room }) => {
  const current_user = store.user.current_user.id;

  const GetPeopleNumber = (people_number: number) => {
    return people_number % 10 < 5 &&
      people_number % 10 > 1 &&
      !(people_number % 100 < 15 && people_number % 100 > 11)
      ? " человека"
      : " человек";
  };

  const GetDate = (unixtime: number) => {
    const date = new Date(unixtime);
    return date.getFullYear() === new Date().getFullYear()
      ? date.toLocaleString("ru", {
          month: "long",
          day: "numeric",
        })
      : date.toLocaleString("ru", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
  };

  return (
    <div className="room">
      <div className="room__name">
        <span className="room__name-text">{room.title}</span>
        {!room.amount && (
          <span className="room__name-tick">
            <TickIcon />
          </span>
        )}
      </div>
      <div className="room__subtitle">
        <div className="room__description">
          <div className="room__description-data">
            {GetDate(room.date)} | {room.people_number}
            {GetPeopleNumber(room.people_number)}
          </div>
          {current_user === room.owner && (
            <div className="room__description-owner">Ваша комната</div>
          )}
        </div>
        {room.amount && (
          <div
            className={
              room.amount > 0 ? "room__amount_red" : "room__amount_green"
            }
          >
            {Math.abs(room.amount)}р
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomItem;
