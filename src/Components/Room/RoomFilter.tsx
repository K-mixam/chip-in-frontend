import store from "../../store";
import "./RoomFilter.scss";

const RoomFilter = () => {
  return (
    <div className="room-filter checkbox">
      <input
        onChange={() => store.room.toggleFilter()}
        className="checkbox__input"
        type="checkbox"
        id="my-rooms"
      />
      <label className="checkbox__text" htmlFor="my-rooms">
        Только мои комнаты
      </label>
    </div>
  );
};

export default RoomFilter;
