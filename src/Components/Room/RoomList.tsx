import store from "../../store";
import RoomItem from "./RoomItem";

const RoomList = () => {
  const rooms = store.room.rooms;
  return (
    <div className="rooms">
      {rooms.map((room) => {
        return <RoomItem room={room} key={room.id} />;
      })}
    </div>
  );
};

export default RoomList;
