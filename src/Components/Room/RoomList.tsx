import { observer } from "mobx-react-lite";
import store from "../../store";
import RoomItem from "./RoomItem";

const RoomList = observer(() => {
  const {
    room: { rooms, is_filtered_owner },
    user: { current_user },
  } = store;

  const getRoomsWithFilter = () => {
    return rooms.map((room) => {
      return (
        room.owner === current_user.id && <RoomItem room={room} key={room.id} />
      );
    });
  };

  const getRoomsWithoutFilter = () => {
    return rooms.map((room) => {
      return <RoomItem room={room} key={room.id} />;
    });
  };

  return (
    <div className="rooms">
      {is_filtered_owner ? getRoomsWithFilter() : getRoomsWithoutFilter()}
    </div>
  );
});

export default RoomList;
