import RoomFilter from "./RoomFilter";
import RoomSorting from "./RoomSorting";
import "./RoomDisplayControl.scss";

const RoomDisplayControl = () => {
  return (
    <div className="room-display-control">
      <RoomFilter />
      <RoomSorting />
    </div>
  );
};

export default RoomDisplayControl;
